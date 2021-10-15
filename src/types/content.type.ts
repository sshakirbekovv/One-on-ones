export interface ContentInfo {
    title: string;
    list: [
        {
            title: string;
        }
    ]
    link: string;
    accomplishmentlists: [
        {
            accomplishments: [
                {
                    title: string;
                }
            ]
        },
    ];
}

export interface CommonItem {
    link: string;
    name: string;
    special: string;
    iconfirst: string;
    listfirst: string;
    iconsecond: string;
    listsecond: string;
    photo: string;
}