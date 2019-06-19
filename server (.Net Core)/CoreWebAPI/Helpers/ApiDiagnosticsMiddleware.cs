using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace CoreWebAPI.Helpers
{
    public class ApiDiagnosticsMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;

        public ApiDiagnosticsMiddleware(
            RequestDelegate next,
            ILogger<ApiDiagnosticsMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            _logger.LogDebug("::::TEST_BEGIN::::");
            _logger.LogDebug(context.Request.Headers["Authorization"],
                context.Request.Headers["TEST_KEY"]);
            _logger.LogDebug("::::TEST_END::::");

            await _next(context);
        }       
    }
}
