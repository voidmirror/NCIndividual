import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm = new FormGroup({
    name: new FormControl(),
    feedbackText: new FormControl()
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
    this.router.navigate(['']);
  }

}
