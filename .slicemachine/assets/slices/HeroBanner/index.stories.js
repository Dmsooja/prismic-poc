import MyComponent from '../../../../slices/HeroBanner';

export default {
  title: 'slices/HeroBanner'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"cta_label":"Click here","cta_link":{"link_type":"Web","url":"http://google.com"},"cta_type":"Primary"}],"primary":{"title_top_line":[{"type":"heading1","text":"Atmosphere","spans":[]}],"title_bottom_line":[{"type":"heading1","text":"Upward","spans":[]}],"description":[{"type":"paragraph","text":"Ex voluptate non ullamco reprehenderit nulla dolor tempor laborum. Cillum adipisicing et voluptate sint nulla ullamco sint enim ipsum culpa eu.","spans":[]}],"image":{"dimensions":{"width":640,"height":554},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb"}},"slice_type":"hero_banner","id":"_Default"}} />
_Default.storyName = ''

export const _WithoutCta = () => <MyComponent slice={{"variation":"withoutCta","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title_top_line":[{"type":"heading1","text":"Mental","spans":[]}],"title_bottom_line":[{"type":"heading1","text":"Fight","spans":[]}],"description":[{"type":"paragraph","text":"Elit excepteur quis laborum non anim duis aute tempor amet laboris ut officia ea. Dolore esse ex eu cupidatat fugiat ullamco et proident consectetur excepteur labore ad dolore proident. Voluptate do elit ipsum eu.","spans":[]}],"image":{"dimensions":{"width":640,"height":554},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468"}},"slice_type":"hero_banner","id":"_WithoutCta"}} />
_WithoutCta.storyName = ''
