﻿
using System;
using System.Collections.Generic;

namespace BackendComfeco.DTOs.WorkShop
{
    public class WorkShopFilter
    {
        public string TitleContains { get; set; }

        public string UserId { get; set; }

        public string UserNameContains { get; set; }

        public List<int> AreaIds { get; set; }

        public List<int> TechnologyIds { get; set; }

        public DateTime AfterThan { get; set; }

        public DateTime BeforeThan { get; set; }

        public int Page { get; set; } = 1;
        public int RecordsPerPage { get; set; } = 10;
    }
}
