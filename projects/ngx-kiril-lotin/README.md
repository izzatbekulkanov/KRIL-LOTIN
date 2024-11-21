# ngx-kiril-lotin

[DEMO](https://stackblitz.com/edit/angular-pnxs4z?file=src%2Fmain.ts)

# O'rnatish

Quyidagi kamanda bilan o'rnatiladi:

```bash
npm i ngx-kiril-lotin
```

# Foydalanish uchun

Foydalanmoqchi bo'lgan module yoki standalone komponentalarga import qilish kerak bo'ladi:

```
import { NgxKirilLotinPipe } from 'ngx-kiril-lotin';

@NgModule({
  declarations: [YourComponent],
  imports: [NgxKirilLotinPipe],
})
export class YourModule {}
```

# Foydalanish

`HTML` template:

```
{{ 'Biror matn' | ngxKirilLotin }}
{{ 'Бирор матн' | ngxKirilLotin: 'kirilToLotin' }}
```

\*\*\* Ushbu pipe default lotindan kirilga o'tkazadi. TEskarisini qilish uchun esa tipiga `kirilToLotin` ni o'rnatish kerak.
