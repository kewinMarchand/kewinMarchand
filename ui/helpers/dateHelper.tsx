export const dateHelper = {
    getAge: function(birthdate: number | string | Date): string {
        const today = new Date();
        const birthDate = new Date(birthdate);
        const m = today.getMonth() - birthDate.getMonth();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return `${age} ans`;
    }
}