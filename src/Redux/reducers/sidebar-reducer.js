let initialState = {
    friends: [{
            id: 1,
            name: 'Andrew',
            href: '#1',
            avatar: 'https://st.depositphotos.com/1008939/2240/i/600/depositphotos_22408839-stock-photo-serious.jpg'
        },
        {
            id: 2,
            href: '#2',
            name: 'Olga',
            avatar: 'https://nevsepic.com.ua/uploads/posts/2011-09/thumbs/1315769408_386555_www.nevsepic.com.ua.jpg'
        },
        {
            id: 3,
            href: '#3',
            name: 'Viktor',
            avatar: 'https://i.pinimg.com/236x/ab/0a/9e/ab0a9efc0be76aabcc54aff2ba3cee48--to-tell-truths.jpg'
        },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer