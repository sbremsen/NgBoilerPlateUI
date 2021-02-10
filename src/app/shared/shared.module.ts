import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import {
  ButtonsModule,
  InputsModule,
  CardsModule,
  InputUtilitiesModule,
  IconsModule,
} from 'ng-uikit-pro-standard';
import { CustomersModalComponent } from './components/customers-modal/customers-modal.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { BoardModalComponent } from './components/kanban-modals/board-modal/board-modal.component';
import { TaskModalComponent } from './components/kanban-modals/task-modal/task-modal.component';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    BoardModalComponent,
    TaskModalComponent,
    CustomersModalComponent,
    ProjectModalComponent,
    ProjectsListComponent,
    ProjectComponent,
    CustomersListComponent,
  ],
  imports: [
    CommonModule,
    InputsModule,
    InputUtilitiesModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    CardsModule,
  ],
  exports: [ProjectsListComponent, ProjectComponent, CustomersListComponent],
  providers: [],
  entryComponents: [
    ConfirmModalComponent,
    CustomersModalComponent,
    ProjectModalComponent,
    BoardModalComponent
  ]
})
export class SharedModule {}
