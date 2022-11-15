import MyComponent from '../../../../slices/HeroBanner';

export default {
  title: 'slices/HeroBanner'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"cta_label":"Click here","cta_link":{"link_type":"Web","url":"https://slicemachine.dev"},"cta_type":"Primary"}],"primary":{"title_top_line":[{"type":"heading1","text":"Current","spans":[]}],"title_bottom_line":[{"type":"heading1","text":"Actual","spans":[]}],"description":[{"type":"paragraph","text":"Minim ut eiusmod amet ipsum excepteur anim aute aliqua sint fugiat aliqua eu.","spans":[]}],"image":{"dimensions":{"width":640,"height":554},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa"}},"slice_type":"hero_banner","id":"_Default"}} />
_Default.storyName = ''

export const _WithoutCta = () => <MyComponent slice={{"variation":"withoutCta","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title_top_line":[{"type":"heading1","text":"Factory","spans":[]}],"title_bottom_line":[{"type":"heading1","text":"Shallow","spans":[]}],"description":[{"type":"paragraph","text":"Velit do eu Lorem est elit tempor Lorem anim eu occaecat anim. Nostrud laborum exercitation magna nostrud aliquip adipisicing aliquip sit velit ipsum qui velit in laborum. Esse ipsum eu amet commodo eiusmod eiusmod Lorem minim adipisicing qui voluptate dolore ut ad.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88"}},"slice_type":"hero_banner","id":"_WithoutCta"}} />
_WithoutCta.storyName = ''
