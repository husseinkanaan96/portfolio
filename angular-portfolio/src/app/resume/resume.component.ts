import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isWorkExpOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificatesOpen: boolean = false;
  isSkillsOpen: boolean = false;
  isLanguagesOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2) {

    this.titleService.setTitle('Hussein M. Kanaan - Resume');
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Hussein Kanaan’s Resume.pdf');
    link.setAttribute('download', 'Hussein Kanaan’s Resume.pdf');
    link.click();
    link.remove();
  }

}
