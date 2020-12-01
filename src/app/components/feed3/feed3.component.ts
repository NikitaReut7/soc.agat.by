import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Router } from '@angular/router';



export interface PeriodicElement {
  name: string;
  date: string;
  md5: string;
}


export interface PeriodicElement2 {
  name: string;
  date: string;
  source: string;
  md5: string;
}


export interface PeriodicElement3 {
    name: string;
    name2: string;
    name3: string;
    name4: string;
    name5: string;
    name6: string;
   
  }

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Bokbot_93ef74', date: '3 апреля 2019', md5: '93ef74249e34d0cfeb3a569b625e4aac'},

  {name: 'Emotet_2a618b ', date: '21 мая 2019', md5: '2a618bdba6a9e6061271abf4b15fca81'},
  {name: 'Emotet_aabd67', date: '21 мая 2019 ', md5: 'aabd670bde67102d3c602bdfb4b84549'},
  {name: 'IcedID_85d59c', date: '21 августа 2019', md5: '85d59cec82bbdc196633169d935b24a8'},
  {name: 'Loki_af260d', date: '21 августа 2019', md5: 'af260d8dfa747b2683051766efcff879'},
  {name: 'LooCipher_dc645f', date: '5 августа 2019', md5: 'dc645f572d1f06d93f8010434b70e206'},
  {name: 'Nymaim_d3a408', date: '20 августа 2019', md5: 'd3a408d6ae7f683c1ac41e95ef09b39f'},



  {name: 'Qakbot_92080c ', date: '24 июля 2019', md5: '92080c4af2ffaaa46b846dd8392e751d'},
  {name: 'Qbot_c4d931', date: '23 мая 2018', md5: 'c4d931dbdf3700d800083662342cdb80 '},
  {name: 'Ramnit_436aaa ', date: '9 мая 2019 ', md5: '436aaa1014e8528ed72c89c4bf74d14c'},
  {name: 'RamnitRIG_2f882a', date: '10 мая 2019', md5: '2f882ad7dda9ba4f3926e073c81e0088'},
  {name: 'TrickBot_13959e', date: '12 марта 2019', md5: '13959eae23c29cac09eab5bd80d95087'},
  {name: 'TrickBot_29853c', date: '14 марта 2019', md5: '29853c4003761f24550638eef7e736ff'},


  {name: 'TrickBot_2d9a2a', date: '9 января 2019', md5: '2d9a2aac9084a566348e4a8444d6345b'},
  {name: 'TrickBot_692ec7', date: '12 марта 2019', md5: '692ec731123452c1995e6b582231b1ee '},
  {name: 'TrickBot_bfd878', date: '18 января 2019', md5: 'bfd878192a809770d1f2950410267622'},
  {name: 'Trickbot_db0bb0', date: '23 октября 2018', md5: 'db0bb0926cbc24a905ae237e61cb9c73'},
  {name: 'Ursnif_6ca486', date: '16 июля 2019', md5: '6ca486ad6653874ac7835ae48a80e1d8'},

  

  
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {name: 'samerton.png/ tablone.png ', date: '12 сентября 2019', source: '104.168.98[.]206', md5: '040b8d671a1f112ad2d983d79ea2e81e '},


  {name: 'MaCl27834.exe', date: '03 сентября 2019', source: '172.245.241[.]103', md5: '4992e2873e1db5168a4f446c51ad5fda'},
  {name: 'edward.exe', date: '02 сентября 2019 ', source: '172.245.241[.]103', md5: '9c723532432c7fce8cb9ee0c061a2d8b'},
  {name: 'lou3084.exe', date: '04 сентября 2019', source: '172.245.241[.]103', md5: '6b9dba564d91e38f3b4cccc13459bb58'},
  {name: 'samerton.png/ tablone.png ', date: '23 сентября 2019', source: '46.30.42[.]245', md5: '260dab93728e53ff78843201803a218b'},

  {name: 'Samerton.png', date: '20 сентября 2019', source: '79.124.49[.]203', md5: '0b81b0ce1fe8500d0500dd8eef603ae4'},
  {name: 'Sin.png/tin.png', date: '10 сентября 2019', source: '85.204.116[.]123', md5: 'b92d03fff2541c476319340492bc0211'},


];



const ELEMENT_DATA3: PeriodicElement3[] = [
    {name: '/add/', name2: '/cone/',  name3: '/health/', name4: '/pdf/', name5: '/schema/', name6: '/tlb/'},
    {name: '/arizona/', name2: '/cookies/',  name3: '/iab/', name4: '/plain/', name5: '/scripts/', name6: '/tpt/'},
    {name: '/attrib/', name2: '/del227/',  name3: '/img/', name4: '/pnp/', name5: '/sess/', name6: '/uploads/'},


    {name: '/badge/', name2: '/devices/',  name3: '/ip/', name4: '/prep/', name5: '/site/', name6: '/usbccid/'},
    {name: '/balloon/', name2: '/dma/',  name3: '/iplk/', name4: '/prov/', name5: '/splash/', name6: '/vermont/'},
    {name: '/ban/', name2: '/enable/',  name3: '/jit/', name4: '/psec/', name5: '/srvc/', name6: '/walk/'},
    {name: '/between/', name2: '/enabled/',  name3: '/json/', name4: '/publish/', name5: '/stubs/', name6: '/window/'},
    {name: '/bml/', name2: '/entries/',  name3: '/loadan/', name4: '/raster/', name5: '/sym/', name6: '/wp/'},
    {name: '/cab/', name2: '/forced/',  name3: '/merge/', name4: '/report/', name5: '/symbols/', name6: '/wp-content/'},
    {name: '/child/', name2: '/free/',  name3: '/mult/', name4: '/results/', name5: '/taskbar/', name6: '/xian/'},
    {name: '/chunk/', name2: '/glitch/',  name3: '/nsip/', name4: '/ringin/', name5: '/teapot/', name6: ''},
  
  
  
  ];


@Component({
  selector: 'app-feed3',
  templateUrl: './feed3.component.html',
  styleUrls: ['./feed3.component.scss']
})
export class Feed3Component implements OnInit {

  displayedColumns: string[] = ['name', 'date', 'md5'];
  displayedColumns1: string[] = ['name',  'date', 'source', 'md5'];
  displayedColumns2: string[] = ['name',  'name2', 'name3', 'name4','name5', 'name6' ];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;
  dataSource3 = ELEMENT_DATA3;



  public options: any = {
    chart: {
     
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  tooltip: {
    formatter: function() {
      return '<b>' + 'IP: ' + this.point.name +'</b>'
    }
},
  title: {
      text: 'Топ 10 IP-адресов'
  },
 
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>'
          }
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: '181.113.20.186',
          y: 13,
          sliced: true,
          selected: true
      }, {
          name: '36.89.85.103',
          y: 12
      }, {
          name: '189.80.134.122',
          y: 11
      }, {
          name: '170.238.117.187',
          y: 11
      }, {
          name: '181.112.159.70',
          y: 9
      }, {
          name: '200.21.51.38',
          y: 9
      }, {
          name: '107.173.160.19',
          y: 9
      }, {
          name: '103.84.238.3',
          y: 8
      }, {
          name: '185.235.130.84',
          y: 8
      },
      {
        name: '190.154.203.218',
        y: 7
    }]
  }]

  }

  public options1: any = {
    chart: {
     
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  tooltip: {
    formatter: function() {
      return '<b>' + 'Порт: ' + this.point.name +'</b>'
    }
},
  title: {
      text: 'Топ 10 портов'
  },
 
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>'
          }
      }
  },
  series: [{
      colorByPoint: true,
      data: [{
          name: '449',
          y: 65,
          sliced: true,
          selected: true
      }, {
          name: '443',
          y: 20
      }, {
          name: '8082',
          y:    10
      }, {
          name: '447',
          y:  5
      }, {
          name: '80',
          y:  2.5
      }, 
      {
        name: '143',
        y: 2.5
    },
   
  ]
  }]

  }



  public options2: any = {
    chart: {
     
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  tooltip: {
    formatter: function() {
      return '<b>' + 'IP: ' + this.point.name +'</b>'
    }
},
 
title: {
    text: 'Топ IP-адресов'
},
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>'
          }
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: '64.98.36.5',
          y: 24,
          sliced: true,
          selected: true
      }, {
          name: '69.195.79.131',
          y: 12
      }, {
          name: '93.17.128.122',
          y: 10
      }, {
          name: '194.90.9.16',
          y: 9
      }, {
          name: '123.126.45.161',
          y: 9
      }, {
          name: '217.70.178.3',
          y: 8
      }, {
          name: '46.182.5.20',
          y: 9.3
      }, {
          name: '216.40.42.5',
          y: 9.3
      }, {
          name: '203.175.64.65',
          y: 9.3
      },
      {
        name: '50.87.20.180',
        y: 1.0
    }]
  }]

  }

  public options3: any = {
    chart: {
     
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  tooltip: {
    formatter: function() {
      return '<b>' + 'Порт: ' + this.point.name +'</b>'
    }
},
  title: {
      text: 'Топ 10 портов'
  },
 
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>'
          }
      }
  },
  series: [{
      colorByPoint: true,
      data: [{
          name: '25',
          y: 50,
          sliced: true,
          selected: true
      }, {
          name: '587',
          y: 40
      }, {
          name: '443',
          y: 2
      }, 
      {
        name: '449',
        y: 2
    }, 
    {
      name: '465',
      y: 2
  }, 
  {
    name: '8080',
    y: 2
}, 
{
  name: 'Другие',
  y:2
}, 
  ]
  }]

  }



  public options4: any = {
    chart: {
     
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  tooltip: {
    formatter: function() {
      return '<b>' + 'IP: ' + this.point.name +'</b>'
    }
},
  title: {
      text: 'Топ 10 IP-адресов'
  },
 
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>'
          }
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: '61.221.12.26',
          y: 20,
          sliced: true,
          selected: true
      }, {
          name: '37.60.244.211',
          y: 30
      }, {
          name: '198.38.77.162',
          y: 30
      }, {
          name: '24.6.31.163',
          y: 2.8
      }, {
          name: '24.180.246.147',
          y: 2.8
      }, {
          name: '104.194.24.53',
          y: 2.8
      }, {
          name: '70.169.12.141',
          y: 2.8
      }, {
          name: '72.240.59.178',
          y: 2.8
      }, {
          name: '24.141.179.121',
          y: 2.8
      },
      {
        name: '216.218.74.196',
        y: 2.8
    }]
  }]

  }

  public options5: any = {
    chart: {
     
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  tooltip: {
    formatter: function() {
      return '<b>' + 'Порт: ' + this.point.name +'</b>'
    }
},
  title: {
      text: 'Топ 10 портов'
  },
 
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>'
          }
      }
  },
  series: [{
      colorByPoint: true,
      data: [{
          name: '21',
          y: 75,
          sliced: true,
          selected: true
      }, {
          name: '443',
          y: 24
      }, {
          name: '80',
          y: 1
      }, 
  ]
  }]

  }


  public options6: any = {
    chart: {
     
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  tooltip: {
    formatter: function() {
      return '<b>' + 'IP: ' + this.point.name +'</b>'
    }
},
  title: {
      text: 'Топ 10 IP-адресов'
  },
 
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>'
          }
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: '61.221.12.26',
          y: 15,
          sliced: true,
          selected: true
      }, {
          name: '37.60.244.211',
          y:15
      }, {
          name: '198.38.77.162',
          y:15
      }, {
          name: '24.6.31.163',
          y:15
      }, {
          name: '24.180.246.147',
          y: 10
      }, {
          name: '104.194.24.53',
          y: 10
      }, {
          name: '70.169.12.141',
          y: 7.5
      }, {
          name: '72.240.59.178',
          y: 7.5
      }, {
          name: '24.141.179.121',
          y: 7.5
      },
      {
        name: '216.218.74.196',
        y: 7.5
    }]
  }]

  }

  public options7: any = {
    chart: {
     
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  tooltip: {
    formatter: function() {
      return '<b>' + 'Порт: ' + this.point.name +'</b>'
    }
},
  title: {
      text: 'Топ 10 портов'
  },
 
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>'
          }
      }
  },
  series: [{
      colorByPoint: true,
      data: [{
          name: '449',
          y: 35,
          sliced: true,
          selected: true
      }, {
          name: '443',
          y: 20
      }, {
          name: '465',
          y: 20
      }, 
      {
        name: '587',
        y: 10
    },
    {
        name: '25',
        y: 2.5
    },
    {
        name: '8080',
        y: 2.5
    },
    {
        name: '80',
        y: 2.5
    },
    {
        name: '2525',
        y: 2.5
    },
    {
        name: '26',
        y: 2.5
    },
    {
        name: 'Другие',
        y: 2.5
    },

  ]
  }]

  }

  constructor(private router: Router) { }

  ngOnInit() {
        const htm = document.getElementById("h");
                htm.style.overflow = "auto";
    window.scrollTo(0, 0);
    Highcharts.chart('container', this.options);
    Highcharts.chart('container1', this.options1);
    Highcharts.chart('container2', this.options2);
    Highcharts.chart('container3', this.options3);
    Highcharts.chart('container4', this.options4);
    Highcharts.chart('container5', this.options5);
    Highcharts.chart('container6', this.options6);
    Highcharts.chart('container7', this.options7);
  }

  
  navToFeeds() {
    this.router.navigate(['feeds']);
  }


}
