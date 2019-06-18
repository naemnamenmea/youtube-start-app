using AutoMapper;
using CoreWebAPI.Entities;
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
