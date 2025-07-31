import { Component, OnInit } from '@angular/core';
import { AminoAcidService } from '../services/amino-acid.service';

@Component({
  selector: 'app-acids',
  templateUrl: './acids.component.html',
  styleUrls: ['./acids.component.css'],
})
export class AcidsComponent implements OnInit {
  products: any[] = [];

  constructor(private aminoService: AminoAcidService) {}

 ngOnInit(): void {
  this.aminoService.getAminoProducts().subscribe((data) => {
    console.log('Fetched products:', data);
    this.products = data.items || [];
  });
}
}
