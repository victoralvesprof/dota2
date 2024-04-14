import { DataTable } from '../model/hero-table.model';

export const DATATABLE = [
  { title: 'Avatar', dataKey: 'avatar' },
  { title: 'Nome', dataKey: 'localized_name' },
  { title: 'Atributo', dataKey: 'primary_attr' },
  { title: 'Tipo de ataque', dataKey: 'attack_type' },
  { title: 'Categorias', dataKey: 'roles' },
] as Array<DataTable>;

export const DATATABLEKEY = [
  'avatar',
  'localized_name',
  'primary_attr',
  'attack_type',
  'roles',
] as Array<string>;

export const URL_BASE_IMAGES = Object.freeze(
  'https://cdn.cloudflare.steamstatic.com'
);
