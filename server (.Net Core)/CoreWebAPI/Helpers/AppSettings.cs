using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWebAPI.Helpers
{
    public class AppSettings
    {       
        public ConnectionStrings ConnectionStrings { get; set; }
        public Logging Logging { get; set; }
        public Tokens Tokens { get; set; }
    }

    public class ConnectionStrings {
        public string DefaultConnection { get; set; }
        public string HomeConnection { get; set; }
    }

    public class Logging
    {
        public int TimeOut { get; set; }
    }

    public class Tokens
    {
        public string Key { get; set; }
    }  
}
