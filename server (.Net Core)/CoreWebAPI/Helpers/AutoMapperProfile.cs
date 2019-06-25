using AutoMapper;
using CoreWebAPI.Models;

namespace CoreWebAPI.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<RegisterUserModel, User>();
            CreateMap<UserRelatedVideoInfo, Video>();
            CreateMap<Video, UserRelatedVideoInfo>();
        }
    }
}
