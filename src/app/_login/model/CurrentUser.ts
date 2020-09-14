export class CurrentUser {
    constructor(
        public userId: number,
        public authorities: string[],
        public username: string
    ) {}
}