import { Hero } from '../models/hero.model';

export const mockHeroes: Array<Hero> = [
  {
    id: 1,
    name: 'npc_dota_hero_antimage',
    localized_name: 'Anti-Mage',
    primary_attr: 'agi',
    attack_type: 'Melee',
    roles: ['Carry', 'Escape', 'Nuker'],
    legs: 2,
  },
  {
    id: 2,
    name: 'npc_dota_hero_axe',
    localized_name: 'Axe',
    primary_attr: 'str',
    attack_type: 'Melee',
    roles: ['Initiator', 'Durable', 'Disabler', 'Carry'],
    legs: 2,
  },
];
