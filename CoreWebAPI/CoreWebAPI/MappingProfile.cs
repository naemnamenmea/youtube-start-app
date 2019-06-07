using AutoMapper;
using CoreWebAPI.Entities;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
