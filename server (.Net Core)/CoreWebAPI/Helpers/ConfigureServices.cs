using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;

namespace CoreWebAPI.Helpers
{
    public static class ConfigureServices
    {
        public static void AddCorsAux(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder => builder
                    .AllowAnyOrigin()
                    //.WithOrigins("http://localhost:4205/")
                    .AllowAnyHeader()
                    .AllowCredentials()
                    .AllowAnyMethod()
                );
            });
        }

        public static void AddAuthenticationAux(this IServiceCollection services, string TokensKey)
        {
            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(TokensKey));
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(config =>
            {
                config.RequireHttpsMetadata = false;
                config.SaveToken = true;
                config.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = signingKey,
                    ValidateIssuer = false,
                    ClockSkew = TimeSpan.Zero,
                    ValidateAudience = false,
                    ValidateLifetime = true
                };
            });
        }

        public static void ConfigureMySqlContext(this IServiceCollection services, IConfiguration config)
        {
            var connectionString = config.GetConnectionString("DefaultConnection");
            services.AddDbContext<DataContext>(o => o.UseMySql(connectionString));
        }
    }
}
