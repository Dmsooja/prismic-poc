import MyComponent from '../../../../slices/HeroBanner';

export default {
  title: 'slices/HeroBanner'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"cta_label":"Click here","cta_link":{"link_type":"Web","url":"https://prismic.io"},"cta_type":"Secondary"}],"primary":{"title_top_line":[{"type":"heading1","text":"Managed","spans":[]}],"title_bottom_line":[{"type":"heading1","text":"Object","spans":[]}],"description":[{"type":"paragraph","text":"Proident id consequat adipisicing ea culpa esse mollit aute minim Lorem eiusmod. Dolore sit consequat in elit ea. Reprehenderit occaecat excepteur exercitation nostrud proident aliquip do officia exercitation qui.","spans":[]}],"image":{"dimensions":{"width":640,"height":554},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e"}},"slice_type":"hero_banner","id":"_Default"}} />
_Default.storyName = ''

export const _WithoutCta = () => <MyComponent slice={{"variation":"withoutCta","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title_top_line":[{"type":"heading1","text":"Handsome","spans":[]}],"title_bottom_line":[{"type":"heading1","text":"Chamber","spans":[]}],"description":[{"type":"paragraph","text":"Ullamco enim cupidatat officia deserunt quis. Laboris sunt et et esse qui elit. Commodo sit culpa eu nostrud dolor nostrud aute anim id dolor quis laboris amet incididunt.","spans":[]}],"image":{"dimensions":{"width":640,"height":554},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43"}},"slice_type":"hero_banner","id":"_WithoutCta"}} />
_WithoutCta.storyName = ''

export const _WithSignUpAndMedia = () => <MyComponent slice={{"variation":"withSignUpAndMedia","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title_top_line":[{"type":"heading1","text":"Count","spans":[]}],"title_bottom_line":[{"type":"heading1","text":"According","spans":[]}],"description":[{"type":"paragraph","text":"Occaecat fugiat veniam consequat aute.","spans":[]}],"form_label":"wooden","form_top_message":[{"type":"paragraph","text":"Ipsum proident occaecat qui do minim anim deserunt duis anim incididunt laborum excepteur pariatur.","spans":[]}],"form_placeholder":"Enter your email","form_cta_label":"Sign up","privacy_message":[{"type":"paragraph","text":"Sunt nostrud sit dolore culpa commodo duis adipisicing ipsum nostrud Lorem ipsum. Aute nostrud est aute nisi labore cupidatat ullamco.","spans":[]}],"media_thumbnail":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b"},"show_play_video_button":true},"slice_type":"hero_banner","id":"_WithSignUpAndMedia"}} />
_WithSignUpAndMedia.storyName = ''
