import { Component, OnInit } from '@angular/core';
import { NgSyzButton } from 'projects/ng-syz/src/lib/models';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-button-grid',
  templateUrl: './docs-button-grid.component.html',
  styleUrls: ['./docs-button-grid.component.scss'],
})
export class DocsButtonGridComponent implements OnInit {
  titulo = 'Tipo de Seguro';
  subtitulo = 'Seguros disponíveis';
  corTextoExemplo1 = '#fff';
  corBordaExemplo1 = '#fff';
  importCode =
    "import { NgSyzButtonGridModule } from 'projects/ng-syz/src/public-api'";

  componentProps: ComponentProps[] = [
    {
      name: '@Input() titulo: string',
      description: 'Título.',
    },
    {
      name: '@Input() subtitulo: string',
      description: 'Subtítulo.',
    },
    {
      name: '@Input() corTextoExemplo1: string',
      description: 'Cor do texto dos cards.',
    },
    {
      name: '@Input() corBordaExemplo1: string',
      description: 'Cor da borda dos cards.',
    },
  ];

  htmlExampleCode1 = `
  <ng-syz-button-grid
    [titulo]="titulo"
    [subtitulo]="subtitulo"
    [buttons]="buttons"
    [corTexto]="corTextoExemplo1"
    [corBorda]="corBordaExemplo1"
  ></ng-syz-button-grid>
  `;

  tsExampleCode1 = `
  import { NgSyzButton } from 'projects/ng-syz/src/lib/models';
  
  titulo = 'Tipo de Seguro';
  subtitulo = 'Subtítulo';
  corTextoExemplo1 = '#fff';
  corBordaExemplo1 = '#fff';

  buttons: NgSyzButton[] = [
    {
      text: 'Seguro Agrícola',
      iconClass: 'fa fa-address-book',
      link: 'https://www.google.com',
    },
    {
      text: 'Seguro Cafezal',
      iconClass: 'fa fa-coffee',
      link: 'https://www.google.com',
    },
    { text: 'Seguro Pecuário', iconClass: 'fa fa-eercast', link: '#' },
    { text: 'Seguro Canavial', iconClass: 'fa fa-picture-o', link: '#' },
    { text: 'Seguro Floresta', iconClass: 'fa fa-tree', link: '#' },
    { text: 'Seguro Penhor de Grãos', iconClass: 'fa fa-picture-o', link: '#' },
    {
      text: 'Seguro Benfeitorias e Multirrisco rural',
      iconClass: 'fa fa-picture-o',
      disabled: true,
      link: '#',
    },
    {
      text: 'Seguro Automotivo',
      iconClass: 'fa fa-car',
      disabled: true,
    },
    {
      text: 'Seguro Penhor de Máquinas e Equipamentos ',
      imgPath:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUPEQ8QDxAVEhcREhEVDRAXFhcYFxYWFhcVFRYYHSggJB8lGxUVITEtJyorOi4uFx8zODMxOCgwLisBCgoKDg0OGhAQGy8mICYtLS0wKzgtLS8vMi0tLTctLS0tLS0tLTUwLy0tLS0vLy0rLS0vLTUtLS0tLTUtLS03Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcEBQYDAgj/xAA/EAACAgACBwMKBQIFBQEAAAAAAQIDBBEFBiExQVFhEiKxEzJScXJzgZGhwSM0QrLwYtEzU4KSogcV0uHxFP/EABoBAQACAwEAAAAAAAAAAAAAAAAFBgECAwT/xAAxEQABAwIBCQgCAwEAAAAAAAAAAQIDBBEhBRIiMUFRcdHwMmGBkaGxweET8RQzUiP/2gAMAwEAAhEDEQA/ALxAAAAAAAAAAAAAAAAAAAAAAAAAPK66MIuc5KEYpuUm0kkt7bYB9yaSzbyS2tlba2a/yUnTg2klsldlm2+UE9mXXjw5vX66a5yxLeHobhht0pbVKz18l048eRxbJekobacqeHPl0kHW5RvoQrxXlz8jeYfWi9zztulLN+f25Jrqdho3Wu+rZN+Wjyk8n8Jf3zKvkdZhn3I+zHwRIOgjelnNQiv5E0So5jl87+i4FoaL07RiMlGfZm/0S2P4cH8DblOG70brPfTkpPy0fRk/CW/55kbNkxdca+C8+fmStPllq4TJbvT5TX5X8CyAaTRmsdF+Ue15Ob/RLZt/pe5m7Ix7HMWzkspMxyMkbnMW6AAGpuAAAAAAAAAAAAAAAAAAAAAAAAADC0ppCvDVSuumoQj82+EYri2ES+BhVsl1PXGYqFMJW2TUIRWcpN7EVBrjrZPGy8nDOvDp7I8ZNbpT+y4GNrVrPbjrMtsKIv8ADrz/AOUucvDhxb0BN0lF+PTfr9vvrhX66vWT/nH2dq7/AK61awZJ8skCLPOZ1uF8yPsR8EcjM63C/wCHH2I+CMoayakPUAGTkGbjRmsV9GS7flIehLPL/S968OhpwaPja9LOS6ddYG8Ur4nZzFsvXn43LE0ZrPRdlGT8lP0ZPZ/u3fPI35ThvtW9PzpnGubcqW8mm/M/qj90RdRk6yK6Ly5cvUnKTK91RkyePNPlPKxYoAIkns1QAAYAAAAAAAAAAAAAAAABpNY9YKsFV27HnN7K6k+9N/Zc398kZa1XLZExNXORqZzlshkac0xVg6nddLJboxXnSfoxX8yKa1j1guxtvlLH2YLzK032YL7vm+P0MfTemLcZa7bpZvdFLzYL0Yr+ZmvJ2lpEiTOXte3DmV2trlmXNbg3348gAD2EcCGSfLBlD4mdZhfMj7EfBHJTOtwvmR9iPgjZDWXUh6gA2scQABYAMAWBmf8Aeb/8x/IkwQcf40X+UPV/MqP9qXKAV5rlrlvw2Fl0suT+ca39/lzK7DA+Z2a0tdRUMgZnvXmvA6/Faew1cuxPEVqSeTjnm0+Ty3fEzcNiIWxU65xsg90oyTXzRQps9Bacuwc+3VLuvzq35svWufVEjJkqzdB2Pf1gREWW7u/6MsncuKcy7gaXQGsFOMh2oPszS71TazXVc118DdEU5rmrmuSyk4x7XtRzVuigAGpsAAAADlNctboYKLrhlZiWtkeEE90pfZcTdjHPcjWpiaSSNjbnOWyGTrVrPVga9uVl0l+HVn/ynyj48OlN6T0hbibZXXTc5y48EuEYrgkeWLxM7pytsk5zk85Sb2t/z5HgTtNSthTeu1eRW6usdOttTd3PrAkEA9R4iQQACSAGAeczrMN5kfYj4I5nDYWd01VVGU5yeUYxWbZ1aodeVcllKCUZLPPbHutZ+tMy1UVbbTErVzUXZexIANzgAAAAAAfIIBmxtY3mu+tUpueFobjWm4WTT2za3pP0eHX1b+IPbGVShZKE8+3F9mWfNPJ/U8TjTxMijRrf33nWrnfNKrn8Lbu4AA7HmPXDXzrmrISlGcXnGSeTRZOq+ukL8qcQ4127oz3Rn6+T+j+hWIPPUUzJ0s7Xv6+T10tZJTLduramz995+ggVZqvrpOjKrEdqyncpb5QX3j04cORZeFxMLYKyuUZwks1JPNMr89M+F1nati7+txaqarjqG3YvFNqdb0MgAr3XfXlVdrC4WSdm2NlyeyHOMOcub4evdpFE6V2a06TTMhbnPMzXXXWOGTow7U8RulLY41+vnLpw48nU11spyc5ycpSecpNttt722z5bzebebe1s+Sfgp2wtsmvapWqmqfO666tidbSQQDueUkEAAkEAyCTb6v6u346fYqjlBPv2Sz7EfjxfRf8As3mqGo08TldiO1VRvSyylYunKPXjw5lq4LB101qqqEa4RWSjFZL+dSOqa5GaLMV9E++lJSkyc5+lJgm7avJPU1urerdGBh2a49qxrv2yXel/ZdEcBpb8xb7yX7mW2VJpf8xZ7yX7mc8mOV0j3OW64HXLDUbExGphf4MUEAmCvkggAEkAAEAgGwsdvrjqksTnfQlG9Latynl4S6/PmqwtrcJOMouMk8nFpppremmfoA5jW3VWGMj24ZQxCWyXCeX6ZfZ8CBo678dmSati7vr2LJX5NSW8kfa2pv8AvpSoge2Jw86pyrsi4zi8pRa2o8SdTErSoqLZQADJgG30BrBdgp9qt5wb71b82X9n1X13GoBq5jXpmuS6G8cjo3ZzFsp12t+v8rK1ThYzpU4/iWPLtbd8IP7+BX6ZsZRTWTWaMK/DuO1bV9UcI4GxNsxD2SVTqh15NfofKZOZ5qR9Jm5zVD6BGYAsSCDa6B0FfjLPJ1Q2Lz5vZCC5yf23sw5yNS7lshsxjnrmtxUwMPROyarrjKc5PKMYptt9EWjqjqFGnK/FqNl2+NWxxh7XpS+i67zfatar0YGHcXbtayndJLtPpHlHp88zfkNU1yyaLME9/onaTJ7Y9KTF3onNekAAI8kwVHpj8xZ7yX7pFuFR6Y/MWe8l+6RK5K7TuBDZa/rZx+DFB8gmiu2PoHyALH0D5AFiAADJdIAKgXo5/WbVuvGw4Quiu5Zl/wAZc4+HDrUukcBZh7HTbBwnHhwa4NPimX0abWDQdWMr7Fi7Ml5liXei/uua/wDp76StWHRdi324ciMrsnpPpswd78fhfMpQGdprRVuEtddscnvjJea16UTAJ9rkcl0W6FYexzHK1yWVCQQDY1JBAAMe/C57Y7HyMTPLY9hszzupUuj5mqt3HZklsFMJMnMmGGm5quMZTnJ5RUU25Pkki0NT/wDp8q+zfjEp2b40bHGPvOEn03evh5ZqhkKXd5HtgpXzLoat+zruOe1Q1ItxeV12dWH3p/rn7Ce5dX8M+Fs6PwFWHrVVVca4R3RXi3vb6szAQU9Q+ZdLVuLDT0rIEs3XtXrZ3AAHA9AAAAKi0x+Yt95L90i3SotMfmLfeS/dIlsldp3Ahstf1s4/BiAgEyV4kEAAkEAAAAyC6QAU8vQNdpnS9ODqd10+zFbEv1SfCMVxZ46xaeqwVXlbXm3shWmu1N8l05vgUnrBpy7G2+Vtl0hFebBcorxfE9dLSumW69nrUeOrrGwpZMXbvlT21n1ouxt3lJdyuOahUnsinz5t5LNmHTapLNfFGC0fMZOLzW8no0bGma1LIVyZVlVXOXE2YPOi9SXJ8UfZ3PIqKi2UkEAGCQQADJwWLsonGyuTjOLzUl8vkWjqtrjXisqrMqsRuy29iXst7n0fwzKlB5qikZOmlgu/rWnceylrZKddHFN3Wpe8/Q4Kz1U15lDKnFtzhujdtco9Jc113+vhY9N0ZxU4SU4yWcZRaaa5por09O+F1n+ewtFPUxztzmL4bUPUAHE7gAAAqLTH5i33kv3SLdKh0x+Yt95L90iWyV2ncCGy1/Uzj8GIACaK8AAAAAAQCAZsC6zn9adZqsBXnLv2yX4dSe19Xyj1MbXLW2vAw7Ecp4iSzhXnsivTs6dOP1VNY/HWYiyV1s3ZOTzcn4LkuiK5S0ay6Tuz7/XeWqsrUi0W9r2++7zPXS2lbcXa7rp9ub3corhGK4JfzaYJIJtEREshAOVXLdQfLR9AyYPPanmtjM2jEdrZul/NxiNGZofQ9+LtVWHg5y3t7oxXpSlwX8WYV6NS66jP4/yYJr2HqDqNYtS7sJVG1T8tFRXlZRhl2ZcXl6PX5nLG0UrJW5zFuhxmgfC7MellJAB0OQAAAN9q1rRdgpZJ+UpbzlW3s6tPg/HiaEGj2Ne3Ncl0OkUj4nZ7FspeuhtMU4yvylM8/Si9kovlJGyKC0bpC3D2K2mbhNcVua5SW5otTVXW+rF5VzyqxHoZ92fWDfhv9e8gaqhdFpMxb6px5lkososn0XYO9F4cjqQAeAkgVBpj8xb7yX7pFvlP6Y/MXe8n+6RLZK7buBDZZ/rZx+DFBAJorxIIABIIABIPkAyc9pPGyxF1l823Oc3J9M3sXqSyXwMU7HX/AFUnhbZYmuPaw1k3LNL/AA5Sfmy6ZvY/h6+NPJC9r2IrdXWB7p43MkVH6/fv8SQQDrc5EgmKbaSTbbySSzbb3JIsjU7/AKeZ5X42PWOH+9n/AI/Pkcpp2RJdx2gp3zOs3z2Ic7qnqbdjmpvOrDJ7bWtsst6guL67l13FwaI0RThKlVRBQjvb/VJ+lJ72zMrgopRilGKWSSWSSW5JHoQVRUvmXHBN3WssNPSshTDFd/Wo+ZxTWTWaexorTXTUx19rE4aP4e2U61vhzlH+npw9W6zQawTvhdnN/ZtUU7J2Zr/116n53BY2uepfa7WIwsNu+dKW/nKC+3HhydcFkp52Ttzm+KbuvUqtTTPp35r/AAXf1tTZ5XkEA7HmJBAAJJUmnmnk1tTPkGQWDqpr21lRi25cI38fVPn6/nzLErsUkpRalFrNNNNNPc0z89HQ6r6124J9l520N96tvdzcXwfTc/qRNVk1HaUWC7uXLVwJuiyorbMm1b+e/jr4l0FPaX/MXe8n+6RaWiNK04utW0zU47mv1RfKS4Mq3TH5i73k/wB0jnkpFR70U65YVFiYqb/gxASCZIAgEgAgEgAAgGQXPdVGcXCUVKMk4yi0mmnsaafAqPXnUl4bPEYdOeH3yhtcq/7x68OPMuE+Ws9j2oqkE7oXXb4oXKenZM2zvPcfmgzdFaLuxVqqog7JvluivSk9yRcWN1AwFs+35GVbbzca7ZRi/wDTuXwyN1ojRFOFh5OiqNcd7yzbb5yk9r+JIvyk3N0EW/eRkeS3Z2m5Ld36NHqjqZTgUrJZXYjLbY1sj0rT8d76bjrACKe9z1znLdSXZG1jc1qWQAA1NwAAAcRrpqcsRniMOlG/fOGxKzquUvH6nbg6RSvidnMXE5TQslZmPTA/PE4OLcWnGSeTTTTTW9NHwW7rfqlDGJ21pQxKW/cp5cH15P4PpU2JolXN1zi4Ti8pRayaZY6aqZO26a9qdbCr1VG+ndZcU2L1qU8wAek8YAAADAZkyZOi9K3YWxW0zcJLfykvRkuKNvdiHbJ3NJOffaW5N95pfM5mZv6PNj7K8DGYiOzrY6jo57szNvhe9u89QAZOQAAAAAAB8kmbAu0AFNLyAAAAAAAAAAAAAAADm9bNV68dHtLKF8V3LMtj/plzXh80+kBux7mORzVsppJG2Rqtcl0Pz7j8DZRZKm2DhOL2p+KfFdTHLu1l1dqxtfZl3LIr8OxLbHo+cehTmltGW4S11Wx7MltT/TJcJRfFFhpKxs6W1O3cusCsVtE6nW6Yt38+sTEBAPaeEkhg+WAfEzoKPMj7K8Dn5m+o82PsrwNjK6j0AANQAAAAQAAe/wD+Oz/Ln/tJOX5Y/wDSeZ1/DJ/lfIucAFRLoAAAAAAAAAAAAAAAAAADVae0JVjKvJWrbvhNedB80/FcTagy1ytVFRbKYc1HJZdRQ+n9CW4K3yVq2PbGaXdmua681w+Rqy/dLaLqxVTpuj2ovc+MXwlF8GU7rPq5bgp9mXfqk+5YlsfR8pdCwUdak2i7B3v1u8UK3W0Cw6bOz7fW5fM0hDAZIEaecjf0ebH2V4HPyN/R5kfZXgbGV1HoSQSYNQQDO0Zoi7EvKqttcZPZFetvZ9zDnI1LuWyGzGOeua1LruME2+rWhZYu1LJqmLznLhl6KfN/TedTojUquGUr5eWl6KzjBfd/T1HVU1RhFQhFQitiikkl6kiJqcptsrYte/l0hL0uSnXR02r/ADrvx2eV+I8hD0I/7UD1BB2QsOcoABk1AAAAAAAAAAAAAAAAAAAAABiY/BV31yqtipwksnF+KfB9TLAMKlyltbtVJ4KfaWdlEn3bMtsf6ZZcevH6HNM/RGIojZB1zipwkspRazTXJlU616jW0SdmGjK3Dvb2VtlDo1va6/Pm52jr0foSrZd+/wC/cga3JysXPiTDam7h3d2zhq4mRv6PNj7K8DVU4Nt97upb89/qyOs0Tq7iMTl2a+zD/MlnGPw4v4Ik3vbGmc9bIRTGrKuaxLr3de5qzZaK0HfiX+HW+zxsl3Yr48fhmdvonU+inKVn49i5rKK9UePxzOljFJZJZJbkRU+VUTCJPFfhOfkS0GSFXGZfBPleV+Jy2iNS6a8pXfjT5ZZQX+nj8fkdPXBRSjFKKWxJJJL1I9AREsr5Vu9b9btngTMUMcTc1iWTrXv8QADmdQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRYv8ANL1o3oBhNhuu0AAyaAAAAAAAAAH/2Q==',
      link: '#',
    },
  ];

  `;

  buttons: NgSyzButton[] = [
    {
      text: 'Seguro Agrícola',
      iconClass: 'fa fa-address-book',
      link: 'https://www.google.com',
    },
    {
      text: 'Seguro Cafezal',
      iconClass: 'fa fa-coffee',
      link: 'https://www.google.com',
    },
    { text: 'Seguro Pecuário', iconClass: 'fa fa-eercast', link: '#' },
    { text: 'Seguro Canavial', iconClass: 'fa fa-picture-o', link: '#' },
    { text: 'Seguro Floresta', iconClass: 'fa fa-tree', link: '#' },
    { text: 'Seguro Penhor de Grãos', iconClass: 'fa fa-picture-o', link: '#' },
    {
      text: 'Seguro Benfeitorias e Multirrisco rural',
      iconClass: 'fa fa-picture-o',
      disabled: true,
      link: '#',
    },
    {
      text: 'Seguro Automotivo',
      iconClass: 'fa fa-car',
      disabled: true,
    },
    {
      text: 'Seguro Penhor de Máquinas e Equipamentos ',
      imgPath:
        'data:image/jpeg;base64,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',
      link: '#',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
