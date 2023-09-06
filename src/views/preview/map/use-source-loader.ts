export function useSourceLoader() {
  const loadTypeSource = (dataSource: any) => {
    dataSource.forEach((data: any) => {
      if (data.type === 'terrain') {
      }
    })
  }

  return {
    loadTypeSource
  }
}
