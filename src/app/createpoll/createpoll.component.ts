import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CreatepollService } from './createpoll.service'
@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {
  createpollForm = new FormGroup({

    title: new FormControl('', [Validators.required]),
    option1: new FormControl('', [Validators.required]),
    option2: new FormControl('', [Validators.required]),
    option3: new FormControl('', [Validators.required]),
    option4: new FormControl('', [Validators.required]),
  })

  data = [];
  error = [];

  get title() {
    return this.createpollForm.get('title');
  }
  get option1() {
    return this.createpollForm.get('option1');
  }
  get option2() {
    return this.createpollForm.get('option2');
  }
  get option3() {
    return this.createpollForm.get('option3');
  }
  get option4() {
    return this.createpollForm.get('option4');
  }

  constructor(private CreatepollService: CreatepollService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.CreatepollService.createpoll(this.createpollForm.value.title, this.createpollForm.value.option1, this.createpollForm.value.option2, this.createpollForm.value.option3, this.createpollForm.value.option4).subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error())
    )
    this.createpollForm.reset();
  }
}
