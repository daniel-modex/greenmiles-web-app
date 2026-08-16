import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [type]="type()"
      [disabled]="disabled()"
      [class]="buttonClasses()"
      (click)="btnClick.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  public variant = input<'primary' | 'secondary' | 'glass' | 'outline' | 'dark'>('primary');
  public size = input<'sm' | 'md' | 'lg'>('md');
  public type = input<'button' | 'submit' | 'reset'>('button');
  public fullWidth = input<boolean>(false);
  public disabled = input<boolean>(false);

  public btnClick = output<MouseEvent>();

  protected buttonClasses = computed(() => {
    const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-250 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';
    const width = this.fullWidth() ? 'w-full' : '';

    let szStyle = 'px-5 py-2.5 text-sm';
    if (this.size() === 'sm') szStyle = 'px-3.5 py-1.5 text-xs';
    if (this.size() === 'lg') szStyle = 'px-7 py-3.5 text-base font-semibold';

    let varStyle = '';
    switch (this.variant()) {
      case 'secondary':
        varStyle = 'bg-[#049DD9] text-white hover:bg-[#0385b9] focus:ring-[#049DD9] shadow-md shadow-[#049DD9]/20';
        break;
      case 'glass':
        varStyle = 'bg-white/80 backdrop-blur-md border border-[#6EBF49]/30 text-[#0F1E13] hover:bg-[#D6F2C9]/60 hover:border-[#6EBF49] focus:ring-[#6EBF49]';
        break;
      case 'outline':
        varStyle = 'bg-transparent border-2 border-[#6EBF49] text-[#0F1E13] hover:bg-[#6EBF49] hover:text-white focus:ring-[#6EBF49]';
        break;
      case 'dark':
        varStyle = 'bg-[#0F1E13] text-[#A6D98F] border border-[#6EBF49]/30 hover:bg-[#1a2f20] hover:text-white focus:ring-[#6EBF49]';
        break;
      case 'primary':
      default:
        varStyle = 'bg-[#6EBF49] text-white hover:bg-[#58a637] focus:ring-[#6EBF49] shadow-md shadow-[#6EBF49]/30';
        break;
    }

    return `${base} ${width} ${szStyle} ${varStyle}`;
  });
}
