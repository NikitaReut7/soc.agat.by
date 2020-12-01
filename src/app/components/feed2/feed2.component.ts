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
  {name: 'samerton.png/ tablone.png ', date: '01 Aug 2019', source: '185.141.27[.]172', md5: '1edb531750308d650f5cce1a5242087b'},


  {name: 'samerton.png/ tablone.png ', date: '02 Aug 2019', source: '46.30.42[.]245', md5: 'bb5341804fff575a3dd6aba6d470d5d3'},
  {name: 'samerton.png/ tablone.png ', date: '02 Aug 2019', source: '46.30.42[.]245', md5: '862661c692398c0796747b93cd54acba'},
  {name: 'samerton.png/ tablone.png ', date: '05 Aug 2019', source: '46.30.42[.]245', md5: 'b769d5f087eca8d37ebec61371214c1b'},
  {name: 'samerton.png/ tablone.png ', date: '05 Aug 2019', source: '46.30.42[.]245', md5: 'cc89346ccdf5abd94d30a12ee16a08fe'},

  {name: 'samerton.png/ tablone.png ', date: '06 Aug 2019', source: '139.60.163[.]52', md5: 'ed304d3c26ea0fa5eddeb87cbfe52508'},
  {name: 'samerton.png/ tablone.png ', date: '06 Aug 2019', source: '139.60.163[.]52', md5: '8f82ca3a22aa325d041256f013d52f1c'},
  {name: 'samerton.png/ tablone.png ', date: '07 Aug 2019', source: '139.60.163[.]52', md5: 'b0886718b23b90ee4b8868f09b2973e2'},
  {name: 'samerton.png/ tablone.png ', date: '07 Aug 2019', source: '139.60.163[.]52', md5: 'e654709b91fe60d496c5887f2489ba65'},
  {name: 'samerton.png/ tablone.png ', date: '08 Aug 2019', source: '192.243.109[.]16', md5: '75498ccdf6d1ca96d29735566023829a'},



  {name: 'samerton.png ', date: '08 Aug 2019', source: '2019 139.60.163[.]52 ', md5: '4ac679758f090bb893f00c0684b16a91'},
  {name: 'samerton.png/ tablone.png ', date: '09 Aug 2019', source: '195.133.196[.]173', md5: '29444e574886ad0b9a7a5df3eed4ca32'},
  {name: 'pca3.crl', date: '12 Aug 2019', source: '72.21.91[.]29', md5: '27cfc96b461bc2748ba174338c1722fb'},



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
  selector: 'app-feed2',
  templateUrl: './feed2.component.html',
  styleUrls: ['./feed2.component.scss']
})
export class Feed2Component implements OnInit {
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
          name: '216.40.42.5',
          y: 25.41,
          sliced: true,
          selected: true
      }, {
          name: '74.194.4.181',
          y: 10.84
      }, {
          name: '193.70.18.144',
          y: 10.85
      }, {
          name: '93.17.128.164',
          y: 5.67
      }, {
          name: '192.232.251.76',
          y: 5.18
      }, {
          name: '200.119.45.140',
          y: 3.64
      }, {
          name: '68.83.59.107',
          y: 3.6
      }, {
          name: '46.182.5.20',
          y: 3.2
      }, {
          name: '190.97.219.241',
          y: 1.61
      },
      {
        name: '190.152.4.210',
        y: 1.0
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
          y: 20.41,
          sliced: true,
          selected: true
      }, {
          name: '25',
          y: 20.84
      }, {
          name: '443',
          y: 15.85
      }, {
          name: '587',
          y:  10.85
      }, {
          name: '8080',
          y:  2.85
      }, {
          name: '80',
          y: 1.64
      }, {
          name: '465',
          y: 1.6
      }, {
          name: '995',
          y: 1.6
      }, {
          name: '993',
          y: 1.4
      },
      {
        name: '143',
        y: 1.3
    },
    {
      name: '110',
      y: 1.3
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
    text: 'Топ 10 ip-адресов'
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
          y: 20.41,
          sliced: true,
          selected: true
      }, {
          name: '37.60.244.211',
          y: 25.84
      }, {
          name: '198.38.77.162',
          y: 20.85
      }, {
          name: '24.180.246.147',
          y: 5.67
      }, {
          name: '104.194.24.53',
          y: 5.18
      }, {
          name: '24.6.31.163',
          y: 3.64
      }, {
          name: '70.169.12.141',
          y: 2.6
      }, {
          name: '72.240.59.178',
          y: 1.2
      }, {
          name: '24.141.179.121',
          y: 1.61
      },
      {
        name: '50.206.74.2',
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
          name: '21',
          y: 59.41,
          sliced: true,
          selected: true
      }, {
          name: '443',
          y: 25.84
      }, {
          name: '80',
          y: 4.85
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
      return '<b>' + 'Страна: ' + this.point.name +'</b>'
    }
},
  title: {
      text: 'Топ стран, подвергшихся атакам с мая 2019 по август 2019'
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
          name: '5.39.113.142',
          y: 31.41,
          sliced: true,
          selected: true
      }, {
          name: '185.183.96.213',
          y: 10.84
      }, {
          name: '107.173.57.184',
          y: 10.85
      }, {
          name: '104.192.102.192',
          y: 6.67
      }, {
          name: '5.53.124.44',
          y: 4.18
      }, {
          name: '192.252.210.19',
          y: 1.64
      }, {
          name: '94.103.80.201',
          y: 1.6
      }, {
          name: '107.172.140.118',
          y: 1.2
      }, {
          name: '195.123.243.213',
          y: 1.61
      },
      {
        name: '5.230.26.41',
        y: 1.0
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
          name: '443',
          y: 59.41,
          sliced: true,
          selected: true
      }, {
          name: '449',
          y: 25.84
      }, {
          name: '447',
          y: 4.85
      }, {
          name: '8082',
          y:  4.85
      }, {
          name: '80',
          y:  4.85
      }, {
          name: '5900',
          y: 1.64
      }, {
          name: '2050',
          y: 1.6
      }
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
  }

  
  navToFeeds() {
    this.router.navigate(['feeds']);
  }


}
