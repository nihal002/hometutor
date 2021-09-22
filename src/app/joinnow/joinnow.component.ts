import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})

export class JoinnowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Test 1','description':'Vivek education academy is the best organisation in education field. It provides best teachers and services','image':'../../assets/test.jfif'},
    {'id':2,'name':'Test 2','description':'Vivek education academy is the best organisation in education field. It provides best teachers and services','image':'../../assets/test.jfif'},
    {'id':3,'name':'Test 3','description':'Vivek education academy is the best organisation in education field. It provides best teachers and services','image':'../../assets/test.jfif'},
    {'id':4,'name':'Test 4','description':'Vivek education academy is the best organisation in education field. It provides best teachers and services','image':'../../assets/test.jfif'},
  ]
}

