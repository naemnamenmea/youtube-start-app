using CoreWebAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace CoreWebAPI.Services
{
    public class NoEmbedService
    {

        public HttpClient Client { get; }

        public NoEmbedService(HttpClient client)
        {
            client.BaseAddress = new Uri("https://noembed.com/");
            client.DefaultRequestHeaders.Add("Access-Control-Allow-Origin", "*");
            //client.DefaultRequestHeaders.Add("Accept", "application/vnd.github.v3+json");
            //client.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");

            Client = client;
        }

        public async Task<JsonResult> GetYouTubeVideoJSON(string videoId)
        {
            var response = await Client.GetAsync(
                "embed?url=https://www.youtube.com/watch?v=" + videoId);

            response.EnsureSuccessStatusCode();

            var resault = await response.Content
                .ReadAsAsync<JsonResult>();

            return resault;
        }
    }
}
