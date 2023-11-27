import {
    ROUTE_ABOUT_COMPANY,
    ROUTE_HR_VACANCY,
    ROUTE_LINKS,
    ROUTE_NEED_TO,
    ROUTE_POLICY_PROCEDURES,
    ROUTE_TEAM,
} from 'shared/constants/routes';

export const categoryListData = [
    { id: 1, name: 'О компании', route: ROUTE_ABOUT_COMPANY, icon: 'icon1' },
    { id: 2, name: 'Политики и процедуры', route: ROUTE_POLICY_PROCEDURES, icon: 'icon2' },
    { id: 3, name: 'HR и вакансии', route: ROUTE_HR_VACANCY, icon: 'icon3' },
    { id: 4, name: 'Мне нужно', route: ROUTE_NEED_TO, icon: 'icon4' },
    { id: 5, name: 'Ссылки', route: ROUTE_LINKS, icon: 'icon5' },
    { id: 6, name: 'Team', route: ROUTE_TEAM, icon: 'icon6' },
];

export const socialLinksData = [
    { id: 1, name: 'Insta' },
    { id: 2, name: 'Tg' },
];

export const policyData = [
    {
        id: 1,
        name: 'Деловая этика',
        route: '/policy-procedures/policy/article/1',
        icon: 'icon1',
        buttonText: 'Обращение по безопасности',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 2,
        name: 'Кодекс делового поведения',
        route: '/policy-procedures/policy/article/2',
        icon: 'icon2',
        buttonText: 'Обращение по безопасности',
        description: 'Lorem ipsum dolor sit amet',
    },
    {
        id: 3,
        name: 'Сверхурочная работа',
        route: '/policy-procedures/policy/article/3',
        icon: 'icon2',
        buttonText: 'Обращение по безопасности',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 4,
        name: 'Физическое или моральное насилие',
        route: '/policy-procedures/policy/article/4',
        icon: 'icon2',
        buttonText: 'Обращение по безопасности',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
        id: 5,
        name: 'Ценности компании',
        route: '/policy-procedures/policy/article/5',
        icon: 'icon2',
        buttonText: 'Обращение по безопасности',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 6,
        name: 'Поведение в офисе и вне офиса',
        route: '/policy-procedures/policy/article/6',
        icon: 'icon2',
        buttonText: 'Обращение по безопасности',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
];

export const policyProceduresData = [
    { id: 1, name: 'Политики компании', route: '/policy-procedures/policy', icon: 'icon1' },
    { id: 2, name: 'Процедуры компании', route: '/policy-procedures/procedures', icon: 'icon2' },
];
