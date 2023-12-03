function search(argument) {
	var demo = new Vue({
		el:'#main',
		data: {
			searchString: "",
			articles: [
			{
				"label":"123",
				"title":"234",
				"url":"123.jps",
			},]
		},
		  /**
   * search
   */
computed: {
  filteredArticles: function() {
  var articles_array = this.articles, 
  searchString = this.searchString; 
  if (!searchString) {
     return articles_array;
  }
    searchString = searchString.trim().toLowerCase(); 
articles_array = articles_array.filter(function(item) { 
if (item.label.toLowerCase().indexOf(searchString) !== -1) { 
     return item;
      }
                })
                if (articles_array == "") {
                    document.getElementById("search_p").innerHTML = "未找到该信息！";
                }
                return articles_array;
            }
        }
	})
}
$('#searchList').css('display', 'none');

    document.getElementById("search_p").innerHTML = "搜索";

}