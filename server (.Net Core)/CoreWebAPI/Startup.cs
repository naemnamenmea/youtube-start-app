using AutoMapper;
using CoreWebAPI.Models;
using CoreWebAPI.Helpers;
using CoreWebAPI.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CoreWebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder
                     .AllowAnyOrigin()
                    //.WithOrigins("http://localhost:4205/")
                    .AllowAnyHeader()
                    .AllowCredentials()
                    .AllowAnyMethod();
                });
            });

            //var mappingConfig = new MapperConfiguration(mc =>
            //{
            //    mc.AddProfile(new MappingProfile());
            //});
            //IMapper mapper = mappingConfig.CreateMapper();
            //services.AddSingleton(mapper);

            // configure DI for application services
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IVideoService, VideoService>();
            services.AddAutoMapper();
            services.AddHttpClient<NoEmbedService>();

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddDbContext<DataContext>(options =>
                options.UseMySql(Configuration.GetConnectionString("DefaultConnection")));
            services.AddDefaultIdentity<User>()
                //.AddDefaultUI(UIFramework.Bootstrap4)
                .AddEntityFrameworkStores<DataContext>();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env/*,
            DataContext context, UserManager<ApplicationUser> userManager*/)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseMiddleware<ApiDiagnosticsMiddleware>();
            app.UseCors();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();

            app.UseAuthentication();

            //DbSeeder.SeedDb(context, userManager);

            app.UseMvc();
        }
    }
}
