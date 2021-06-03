import React from 'react'
import {useRouter} from 'next/router'
import {Menu,Segment} from 'semantic-ui-react';

function NavBar() {
    const router = useRouter();
    let activeItem ="요리";

    if(router.pathname === "/") {
      activeItem ="요리"
    }
    else if(router.pathname ==="/about"){
      activeItem="어바웃"
    }

    const goLink = (e) =>{
      let text = e.target.text;

      if(text === "요리"){
          router.push('/');

      }
      else if(text ==="어바웃"){
        router.push('/about');
        
      }
      
    }

    return (
        <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='요리'
            active={activeItem === '요리'}
            onClick={goLink}
          />
          <Menu.Item
            name='어바웃'
            active={activeItem === '어바웃'}
            onClick={goLink}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
          //  onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
}

export default NavBar
