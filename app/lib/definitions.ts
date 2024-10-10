export interface Countries {
	cca3: string;
	flags: {
		[key: string]: string;
	};
	alt: string;
	name: {
		[key: string]: string;
	};
	population: number;
	region: string;
	capital: string;
}


export interface Country extends Countries {
	subregion: string;
	tld: string[];
	currencies: {
		[key: string]: {
			name: string;
            symbol: string;
		};
	};
	languages: {
		[key: string]: string
	};
	borders: string[];
    timezones: string[];
}

