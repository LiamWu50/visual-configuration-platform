import { LogoGithub } from '@vicons/ionicons5'

const Github = defineComponent({
  name: 'Github',
  render() {
    return (
      <NButton
        tag='a'
        quaternary
        target='_blank'
        href='https://github.com/LiamWu50/visual-configuration-platform'
        style='margin: 0 20px 0 0;'
      >
        <NIcon size={20}>
          <LogoGithub />
        </NIcon>
      </NButton>
    )
  }
})
export default Github
