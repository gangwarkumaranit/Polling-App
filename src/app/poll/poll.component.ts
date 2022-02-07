import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { VoteService } from './poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  @Input() poll: any;
  pollForm = new FormGroup({
 
    option_text: new FormControl(''),
  });

  constructor(private voteService: VoteService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.voteService.vote(this.poll._id, this.pollForm.value.option_text).subscribe((data: any) => {
    
   } ) 
   console.log(this.poll._id);
   console.log(this.pollForm.value.option_text);
 
  }
    }

