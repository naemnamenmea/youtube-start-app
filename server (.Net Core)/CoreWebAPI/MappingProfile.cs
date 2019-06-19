using AutoMapper;
using CoreWebAPI.Models;
using Newtonsoft.Json.Linq;

namespace CoreWebAPI
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Video, JObject>();
            CreateMap<JObject, Video>();
        }
    }
}
