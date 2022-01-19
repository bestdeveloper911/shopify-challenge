class CollectionTabs extends HTMLElement {
    constructor() {
      super();

      this.tabs = document.querySelectorAll('.collection-tab-header-item');
      this.tabs.forEach((tab)=> {
        tab.addEventListener('click', (event) => {
					this.tabActive(tab);
        })
      })

			this.viewAllButtons = document.querySelectorAll('.view-all');
			this.viewAllButtons.forEach((btn) => {
				btn.addEventListener('click', (event) => {
					this.loadProducts(btn);
				})
			})

			this.mobTabSelect = document.getElementById('tab-selector');
			this.mobTabSelect.addEventListener('change', (event) => {
				this.activeCollection(event.target.value);
				const obj = event.target;
				const _url = obj.options[obj.selectedIndex].getAttribute('data-url');
				window.history.pushState({page: "Collection"}, "Collection page", _url);
			})

    }

		tabActive(tab) {
			const handle = tab.getAttribute('data-handle');
			const url = tab.getAttribute('data-url');

			window.history.pushState({page: "Collection"}, "Collection page", url);
			this.activeCollection(handle);
			
			const tabs = document.querySelectorAll('.collection-tab-header-item');
			tabs.forEach((_tab) => {
				const t_handle = _tab.getAttribute('data-handle');
				if(handle == t_handle) {
					_tab.classList.add('active');
				} else {
					_tab.classList.remove('active');
				}
			})
		}

		activeCollection(handle) {
			const contents = document.querySelectorAll('.collection-tab-content-wrapper');
			contents.forEach((content) => {
				const c_handle = content.getAttribute('data-handle');
				if(handle == c_handle) {
					content.classList.remove('hidden');
				} else {
					content.classList.add('hidden');
				}
			})
		}

		loadProducts(btn) {
			const items = btn.closest('.collection').querySelectorAll('.grid__item.hidden');
			items.forEach((item) => {
				item.classList.remove('hidden');
			})
			btn.classList.add('hidden');
		}

  }
  
  customElements.define('collection-tabs', CollectionTabs);
  