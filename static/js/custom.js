function pcOpenLeftRightSidebar() {
		    // 判断是否位于PC端
		    if (!isMobileDevice()) {
		      // 查找class为"theme-inner ls-hl-colored"的元素
		      const element = document.querySelector(".theme-inner.ls-hl-colored");
		      // 检查元素是否存在并且类名不包含"ls-left-sidebar-open"
		      if (element && !element.classList.contains("ls-left-sidebar-open")) {
		        // 查找id为"left-menu"的元素并模拟点击操作
		        const leftMenu = document.getElementById("left-menu");
		        if (leftMenu) {
		          leftMenu.click();
		        }
		      }
		      // 检查元素是否存在并且类名不包含"ls-right-sidebar-open"
		      if (element && !element.classList.contains("ls-right-sidebar-open")) {
		        // 查找id为"right-menu"的元素并模拟点击操作
		        const rightMenu = document.querySelector(
		          "button.button.icon.toggle-right-sidebar"
		        );
		        if (rightMenu) {
		          rightMenu.click();
		        }
		      }
		    }else{
		      // 查找class为"theme-inner ls-hl-colored"的元素
		      const element = document.querySelector(".theme-inner.ls-hl-colored");
		      // 检查元素是否存在并且类名不包含"ls-left-sidebar-open"
		      if (element && element.classList.contains("ls-left-sidebar-open")) {
		        // 查找id为"left-menu"的元素并模拟点击操作
		        const leftMenu = document.getElementById("left-menu");
		        if (leftMenu) {
		          leftMenu.click();
		        }
		      }
		      // 检查元素是否存在并且类名不包含"ls-right-sidebar-open"
		      if (element && element.classList.contains("ls-right-sidebar-open")) {
		        // 查找id为"right-menu"的元素并模拟点击操作
		        const rightMenu = document.querySelector(
		          "button.button.icon.toggle-right-sidebar"
		        );
		        if (rightMenu) {
		          rightMenu.click();
		        }
		      }
		    }
		  }
		  // 检测是否为移动设备
		  function isMobileDevice() {
		    //媒体查询
		    return window.matchMedia("only screen and (max-width: 992px)").matches;
		  }
		  
		  async function app() {
		    //本地端执行：
		    if (window.location.host == "") {
		  
		    } else {
		      pcOpenLeftRightSidebar();
		    }
		  }
		  app();