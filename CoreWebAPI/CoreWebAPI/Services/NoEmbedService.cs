using Newtonsoft.Json.Linq;
using System;
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

        public async Task<JObject> GetYouTubeVideoJSON(string videoId)
        {
            var response = await Client.GetAsync(
                "embed?url=https://www.youtube.com/watch?v=" + videoId);

            response.EnsureSuccessStatusCode();

            //return await response.Content.ReadAsStringAsync();
            JObject resault = JObject.Parse(await response.Content.ReadAsStringAsync());
            return resault;

        }
    }
}
