import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: `
    <span [class]="badgeClasses()">
      <ng-content></ng-content>
    </span>
  `,
})
export class BadgeComponent {
  public variant = input<'green' | 'blue' | 'mint' | 'amber' | 'foliage' | 'dark'>('green');
  public size = input<'sm' | 'md'>('md');

  protected badgeClasses = computed(() => {
    const base = 'inline-flex items-center gap-1.5 font-semibold rounded-full border transition-all duration-200';
    const sz = this.size() === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm';
    
    let colorStyle = '';
    switch (this.variant()) {
      case 'blue':
        colorStyle = 'bg-[#049DD9]/10 text-[#049DD9] border-[#049DD9]/30';
        break;
      case 'mint':
        colorStyle = 'bg-[#D6F2C9] text-[#0F1E13] border-[#6EBF49]/40';
        break;
      case 'amber':
        colorStyle = 'bg-amber-500/10 text-amber-600 border-amber-500/30';
        break;
      case 'foliage':
        colorStyle = 'bg-[#A6D98F]/20 text-[#0F1E13] border-[#A6D98F]/50';
        break;
      case 'dark':
        colorStyle = 'bg-[#0F1E13] text-[#A6D98F] border-[#6EBF49]/30';
        break;
      case 'green':
      default:
        colorStyle = 'bg-[#6EBF49]/15 text-[#58a637] border-[#6EBF49]/35';
        break;
    }

    return `${base} ${sz} ${colorStyle}`;
  });
}
