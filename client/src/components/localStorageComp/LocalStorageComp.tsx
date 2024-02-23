

export const setInLocalStorage = (name:string, data: any) => {

    console.log('data en localStorageSetUserData', data)

    const info = {
        mode: data.mode,
        lang : data.lang,
    }

    console.log('data en localStorageSetUserData', data)
   
    localStorage.setItem(name, JSON.stringify(info))
}

export const getInLocalStorage = (name:string) => {
    const jsonDataFromLocalStorage: any = localStorage.getItem(name);
    console.log('jsonUserFromLocalStorage: ', jsonDataFromLocalStorage);
    const infoFLS = JSON.parse(jsonDataFromLocalStorage);
    console.log('infoFLS: ', infoFLS);
    // console.log('infoFLS :', infoFLS? );
    // console.log('infoFLS.user.role: ', infoFLS?.user?.role);
    return infoFLS
}

export const cleanInLocalStorage = (name:string) => {
    localStorage.removeItem(name);
}