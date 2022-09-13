import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetProjectService } from 'services';
import { Observable, NEVER } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ReadColumnsService } from 'src/app/services/read-columns.service';
import { environment } from 'src/environments/environment';
import { Column, Project } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Output() selectedProject = new EventEmitter<Project>();
  project$: Observable<Project[]> = NEVER;
  projects: Project[] = [];
  columns$: Observable<Column[]> = NEVER;
  constructor(
    private projectService: GetProjectService,
    private readColumns: ReadColumnsService,
    private selectedService:SelectedNevigationService,
  ) { }
  ngOnInit() {
    this.project$ = this.projectService.getProjectList$().pipe(
      map(project => this.projects = project),
      // map(project => this.projectInput = project),
      // tap(project => console.log('this.projectInput:', this.projectInput)),
      tap(project => console.log('projects:', project)),
    );
    this.columns$ = this.readColumns.getColumns$(environment.projectsTableColumns)
    // this.selectedService.
  }
  selectProject(project) {
    this.selectedService.project=project
    // this.selectedProject.emit(project);
    this.selectedService.updateSelected('oneProject');
  }
}
