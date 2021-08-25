import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  getData: any = [];
  temArray: any= [];
  getJsonData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.getData = {
      "Commercial": [{
        "Business": "Business"
      }, {
        "Business Only": "Business"
      }, {
        "Commercial Condo": "Condo"
      }, {
        "Commercial Retail": "Condo"
      }],
      "Multi-Unit": [{
        "5-8 Units": "Units"
      }, {
        "9-12 Units": "Units"
      }, {
        "Over 12 Units": "Units"
      }],
      "Residential": [{
        "Co-Op": "Co-Op"
      }, {
        "Condominium": "Condo"
      }, {
        "Cottage / Rec. Properties": "Condo"
      }]
    }

    this.getJsonData = {"status":"success","layout":
    [{"id":1,"system_resource_id":"1","system_class_id":"0","system_class_name":"","sections":
    [{"id":1,"layout_id":1,"section_name":"General","section_sort_order":2,"section_fields":"18,20,21,10,1","show_section_title":"no","section_fields_details":
    [{"id":18,"name":"beds","display_name":"Beds"},
    {"id":20,"name":"address","display_name":"Address"},
    {"id":21,"name":"baths","display_name":"Baths"},
    {"id":10,"name":"list_price","display_name":"List Price"},
    {"id":1,"name":"mls_num","display_name":"MLS Number"}]},
    {"id":3,"layout_id":1,"section_name":"Location","section_sort_order":3,"section_fields":"44,16,30","show_section_title":"no","section_fields_details":[{"id":44,"name":"city","display_name":"City"},
    {"id":16,"name":"elementary_school","display_name":"Elementary School"},{"id":30,"name":"high_school","display_name":"High School"}]},
    {"id":4,"layout_id":1,"section_name":"Description","section_sort_order":4,"section_fields":"28","show_section_title":"no","section_fields_details":
    [{"id":28,"name":"description","display_name":"Description"}]}]}]}
    this.handleFunction(this.getData);
    this.handleJsonFunction(this.getJsonData);
  }

  handleFunction(getData: any) {
    this.temArray = Object.keys(getData);
    console.log('tempArray',this.temArray);
  }

  handleJsonFunction(getJson:any){
    console.table(getJson.layout);
  }
}

