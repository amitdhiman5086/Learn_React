export function filterData(searchText, restaurentList) {
    const filterData = restaurentList.filter((res) => {
      //   console.log(res.info.name) ;
      return res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
    //   console.log(final) ;
    return filterData;
  }

  export default filterData ;