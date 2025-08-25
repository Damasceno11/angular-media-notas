import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MediaPipe } from '../../pipes/media-pipe';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'app-sistema-notas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MediaPipe,
  ],
  templateUrl: './sistema-notas.html',
  styleUrl: './sistema-notas.css',
})
export class SistemaNotasComponent {
  formularioAluno: FormGroup;
  alunos: Aluno[] = [];
  proximoId: number = 1;

  colunasExibidas: string[] = ['nome', 'nota1', 'nota2', 'media', 'situacao'];

  constructor(private fb: FormBuilder) {
    this.formularioAluno = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      nota1: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      nota2: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    });
  }

  adicionarAluno(): void {
    if (this.formularioAluno.valid) {
      const novoAluno: Aluno = {
        id: this.proximoId++,
        nome: this.formularioAluno.value.nome,
        nota1: parseFloat(this.formularioAluno.value.nota1),
        nota2: parseFloat(this.formularioAluno.value.nota2),
      };

      this.alunos = [...this.alunos, novoAluno];
      this.formularioAluno.reset();
    }
  }

  obterSituacao(media: number): string {
    if (media >= 7) return 'Aprovado';
    if (media >= 5) return 'Recuperação';
    return 'Reprovado';
  }

  obterCorSituacao(media: number): string {
    if (media >= 7) return 'verde';
    if (media >= 5) return 'laranja';
    return 'vermelho';
  }
}
