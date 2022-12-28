export class LoginTable{
    email!: string
    password!:string 
}

export class urlTable{
    oldUrl!: string
    newUrl!:string 
}

export class signupTable{
    email!: string
    password!:string 
    confirmPassword!:string
    firstName!:string
    lastName!:string
}

export class resetPsswordTable{
    email!:string
    currentPassword!: string
    newPassword!:string
}

export class emailObjTable{
    email!:string
}