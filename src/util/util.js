export const isSubCenter = (sectionId, index) =>{
    return sectionId!==4 && index===4
}
export const inputFilter = (sectionId, index) =>{

    const filter = { 
        isSubCenter : sectionId!==4 && index===4,
        isMainSub : sectionId===4 && index !==4,
        isMainCenter : sectionId===4 && index ===4
    }

    return filter
}
export const sectionFilter = (goalList, sectionId, index) =>{

    const filter = { 
        isActive :  goalList[sectionId].goal[index]===''  ? false : true
    }

    return filter
}