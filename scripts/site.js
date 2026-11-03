const products = [
  { code: "", file: "432690-z-300x300.jpg", title: "Manguera de caucho", category: "Mangueras", detail: "Manguera enrollada", search: "manguera caucho automotor" },
  { code: "", file: "Multiplex_01_5151f146415d1-300x188.jpg", title: "Manguera Multiplex", category: "Corrugados", detail: "Manguera corrugada", search: "corrugados multiplex" },
  { code: "", file: "Correa-dentada-automotora-300x300.jpg", title: "Correa dentada", category: "Correas", detail: "Correa dentada automotora", search: "transmision distribucion" },
  { code: "9", file: "9.gif", title: "Conexión de caucho", category: "Refrigeración", detail: "Manguera corta · 9 cm", search: "bomba agua massey agricola" },
  { code: "999", file: "999.gif", title: "Manguera de lubricación", category: "Lubricación", detail: "Manguera moldeada · 23 cm", search: "aceite tubo rellenado peugeot 505" },
  { code: "1290", file: "1290.gif", title: "Manguera de aceite", category: "Lubricación", detail: "Manguera recta · 16 cm", search: "motor scania" },
  { code: "1296", file: "1296.gif", title: "Manguera de aceite", category: "Lubricación", detail: "Conexión corta · 6 cm", search: "turbo scania" },
  { code: "1369", file: "1369.gif", title: "Manguera moldeada", category: "Refrigeración", detail: "Manguera de caucho · 33 cm", search: "refrigeracion" },
  { code: "1379", file: "1379.gif", title: "Manguera moldeada", category: "Refrigeración", detail: "Manguera de caucho · 17 cm", search: "refrigeracion" },
  { code: "1527", file: "1527.gif", title: "Manguera moldeada", category: "Refrigeración", detail: "Manguera de caucho · 52 cm", search: "refrigeracion" },
  { code: "1614", file: "1614.gif", title: "Manguera de lubricación", category: "Lubricación", detail: "Manguera moldeada · 25 cm", search: "aceite fiat" },
  { code: "1627", file: "1627.gif", title: "Manguera de lubricación", category: "Lubricación", detail: "Manguera moldeada · 33 cm", search: "aceite fiat" },
  { code: "1628", file: "1628.gif", title: "Manguera moldeada", category: "Refrigeración", detail: "Manguera de caucho · 28 cm", search: "refrigeracion" },
  { code: "1736", file: "1736.gif", title: "Manguera moldeada", category: "Refrigeración", detail: "Manguera de caucho · 10 cm", search: "refrigeracion" },
  { code: "1782", file: "1782.gif", title: "Manguera de climatizador", category: "Refrigeración", detail: "Manguera moldeada · 43 cm", search: "agua climatizador peugeot 205" },
  { code: "1786", file: "1786.gif", title: "Manguera de climatizador", category: "Refrigeración", detail: "Manguera moldeada · 45 cm", search: "agua climatizador peugeot 205" },
  { code: "1823", file: "1823.gif", title: "Manguera de expansión", category: "Refrigeración", detail: "Manguera moldeada · 65 cm", search: "tanque fiat palio siena" },
  { code: "1891", file: "1891.gif", title: "Manguera de agua", category: "Refrigeración", detail: "Manguera moldeada · 23 cm", search: "motor renault r19" },
  { code: "2053", file: "2053.gif", title: "Manguera de expansión", category: "Refrigeración", detail: "Manguera moldeada · 36 cm", search: "vaso volkswagen golf" },
  { code: "2088", file: "2088.gif", title: "Manguera de expansión", category: "Refrigeración", detail: "Manguera moldeada · 52 cm", search: "vaso volkswagen golf" },
  { code: "2089", file: "2089.gif", title: "Manguera de expansión", category: "Refrigeración", detail: "Manguera moldeada · 18 cm", search: "vaso volkswagen golf" },
  { code: "2297", file: "2297.gif", title: "Manguera moldeada", category: "Refrigeración", detail: "Manguera de caucho", search: "refrigeracion" },
  { code: "2388", file: "2388.gif", title: "Manguera moldeada", category: "Refrigeración", detail: "Manguera de caucho", search: "refrigeracion" },
  { code: "2572", file: "2572.gif", title: "Manguera de enfriador de aceite", category: "Lubricación", detail: "Manguera corta · 9 cm", search: "fiat tempra" },
  { code: "2599", file: "2599.gif", title: "Manguera de refrigeración", category: "Refrigeración", detail: "Manguera moldeada · 34 cm", search: "3 vias renault r19" },
  { code: "2715", file: "2715.gif", title: "Manguera moldeada", category: "Refrigeración", detail: "Manguera de caucho", search: "refrigeracion" },
  { code: "3530", file: "3530.gif", title: "Manguera moldeada", category: "Refrigeración", detail: "Manguera de caucho", search: "refrigeracion" },
  { code: "4334", file: "4334.gif", title: "Manguera moldeada", category: "Refrigeración", detail: "Manguera de caucho", search: "refrigeracion" },
  { code: "4438", file: "4438-1.jpg", title: "Manguera moldeada", category: "Refrigeración", detail: "Manguera de caucho · 28 cm", search: "refrigeracion" },
  { code: "4736", file: "4736.jpg", title: "Manguera de termostato", category: "Refrigeración", detail: "Manguera corta · 9 cm", search: "termostato superior alfa romeo 155" },
  { code: "4738", file: "4738.jpg", title: "Manguera de termostato", category: "Refrigeración", detail: "Manguera moldeada · 18 cm", search: "termostato inferior alfa romeo 155" },
  ...(window.distrigomCatalogProducts || [])
];

const productsContainer = document.querySelector("[data-product-grid]");

if (productsContainer) {
  const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
  const brandAliases = [
    ["Alfa Romeo", ["Alfa Romeo"]], ["Auto Unión", ["Auto Unión", "Auto Union"]],
    ["Bedford", ["Bedford"]], ["Chevrolet", ["Chevrolet", "Chevy"]],
    ["Chrysler", ["Chrysler"]], ["Daihatsu", ["Daihatsu"]], ["Dodge", ["Dodge"]],
    ["Fiat", ["Fiat"]], ["Ford", ["Ford", "Falcon", "Fairlane", "Ranchero", "Ranger", "Taunus", "Granada", "Escort", "Mustang"]],
    ["General Motors", ["G. Motors", "General Motors"]],
    ["IKA", ["IKA", "Estanciera", "Jeep IKA"]], ["Indenor", ["Indenor"]],
    ["John Deere", ["John Deere"]], ["Massey Ferguson", ["Massey Ferguson", "Massey Fer.", "Massey"]],
    ["Mazda", ["Mazda"]], ["Mercedes-Benz", ["Mercedes-Benz", "Mercedes Benz", "M. Benz", "Merc. Benz"]],
    ["Mitsubishi", ["Mitsubishi"]], ["Opel", ["Opel"]], ["Peugeot", ["Peugeot", "Peug."]],
    ["Renault", ["Renault", "Dauphine", "Gordini", "Trafic"]], ["Scania", ["Scania"]],
    ["Toyota", ["Toyota"]], ["Volkswagen", ["Volkswagen", "VW", "Gacel"]],
    ["Volvo", ["Volvo"]], ["Zanello", ["Zanello"]]
  ].sort((a, b) => Math.max(...b[1].map((alias) => alias.length)) - Math.max(...a[1].map((alias) => alias.length)));
  const getBrand = (product) => product.brand || brandAliases.find(([, aliases]) =>
    aliases.some((alias) => normalize(`${product.title} ${product.detail} ${product.search || ""}`).includes(normalize(alias)))
  )?.[0] || "";
  const getVehicle = (product) => {
    if (product.vehicle) return product.vehicle;
    const application = product.detail.match(/\bpara\s+(.+?)(?:[,.]| según\b|$)/i)?.[1]?.trim();
    if (application) return application;
    const brand = getBrand(product);
    if (!brand) return "";
    const title = normalize(product.title);
    const aliases = brandAliases.find(([canonical]) => canonical === brand)?.[1] || [];
    const alias = aliases.filter((candidate) => title.includes(normalize(candidate)))
      .sort((a, b) => b.length - a.length)[0];
    if (!alias) return brand;
    const aliasPattern = new RegExp(alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    const match = product.title.match(aliasPattern);
    if (!match) return brand;
    const suffix = product.title.slice(match.index + match[0].length).replace(/^[\s-]+/, "").trim();
    const vehicle = normalize(alias) === normalize(brand) ? brand : `${brand} ${alias}`;
    return suffix ? `${brand} ${suffix}` : vehicle;
  };
  products.forEach((product, index) => {
    product.id = `${product.code || product.title}::${product.file}::${index}`;
    product.brand = getBrand(product);
    product.vehicle = getVehicle(product);
  });

  const searchParams = new URLSearchParams(window.location.search);
  const initialQuery = searchParams.get("q") || "";
  const queryLabel = document.querySelector("[data-query-label]");
  const countLabel = document.querySelector("[data-product-count]");
  const brandFilter = document.querySelector("[data-brand-filter]");
  const vehicleFilter = document.querySelector("[data-vehicle-filter]");
  const categoryFilter = document.querySelector("[data-category-filter]");
  const measureFilter = document.querySelector("[data-measure-filter]");
  const sortSelect = document.querySelector("[data-sort-products]");
  const productDialog = document.querySelector("[data-product-dialog]");
  const quoteDialog = document.querySelector("[data-quote-dialog]");
  const quoteItemsContainer = document.querySelector("[data-quote-items]");
  const quoteCount = document.querySelector("[data-quote-count]");
  const quoteStatus = document.querySelector("[data-quote-status]");
  const quoteEmpty = document.querySelector("[data-quote-empty]");
  const quoteSend = document.querySelector("[data-quote-send]");
  const quoteClear = document.querySelector("[data-quote-clear]");
  const viewButtons = [...document.querySelectorAll("[data-view]")];
  const searchInputs = [...document.querySelectorAll('[data-search-form] input[name="q"]')];
  const getMeasure = (product) => product.measure || product.detail.match(/\b\d+\s*cm\b/i)?.[0].replace(/\s+/g, " ") || "";
  const getProductRequest = (product) => product.code
    ? `Hola, quisiera consultar por el producto YACO código ${product.code}.`
    : `Hola, quisiera consultar por ${product.title}.`;
  const cartStorageKey = "distrigom-quote-list-v1";
  const productById = new Map(products.map((product) => [product.id, product]));
  const setQuoteStatus = (message, isError = false) => {
    if (!quoteStatus) return;
    quoteStatus.textContent = message;
    quoteStatus.classList.toggle("is-error", isError);
  };
  const quotePhone = "1151101561";
  let quoteItems = [];
  let quoteStorageWarning = "";
  let activeCategory = "";
  let activeBrand = "";
  let activeVehicle = "";
  let activeMeasure = "";
  let currentSort = "original";
  let currentView = "list";
  let query = initialQuery.trim().toLocaleLowerCase("es");

  searchInputs.forEach((input) => { input.value = initialQuery; });

  if (queryLabel) queryLabel.textContent = initialQuery ? `Resultados para “${initialQuery}”` : "";

  const populateFilter = (filter, values) => {
    if (!filter) return;
    [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, "es")).forEach((value) => {
      const option = document.createElement("option");
      option.value = normalize(value);
      option.textContent = value;
      filter.append(option);
    });
  };
  populateFilter(brandFilter, products.map((product) => product.brand));
  populateFilter(vehicleFilter, products.map((product) => product.vehicle));
  populateFilter(categoryFilter, products.map((product) => product.category));

  if (measureFilter) {
    [...new Set(products.map(getMeasure).filter(Boolean))]
      .sort((a, b) => Number.parseFloat(a) - Number.parseFloat(b))
      .forEach((measure) => {
        const option = document.createElement("option");
        option.value = measure.toLocaleLowerCase("es");
        option.textContent = measure;
        measureFilter.append(option);
      });
  }

  try {
    const savedQuote = window.localStorage.getItem(cartStorageKey);
    if (savedQuote) {
      const savedItems = JSON.parse(savedQuote);
      if (!Array.isArray(savedItems)) {
        quoteStorageWarning = "La lista guardada tiene un formato que no reconocemos; se inicia una lista vacía.";
      } else {
        quoteItems = savedItems.flatMap((item) => {
          if (!item || typeof item.id !== "string" || !productById.has(item.id)
            || !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99) return [];
          return [{ id: item.id, quantity: item.quantity }];
        });
        if (quoteItems.length !== savedItems.length) {
          quoteStorageWarning = "Se omitieron artículos guardados que ya no están en este catálogo.";
        }
      }
    }
  } catch (error) {
    quoteStorageWarning = error instanceof SyntaxError
      ? "No se pudo leer la lista guardada porque sus datos están dañados."
      : `No se pudo acceder al almacenamiento local: ${error.message}`;
  }

  const saveQuote = () => {
    try {
      window.localStorage.setItem(cartStorageKey, JSON.stringify(quoteItems));
      quoteStorageWarning = "";
      return true;
    } catch (error) {
      quoteStorageWarning = `No pudimos guardar la lista en este navegador: ${error.message}`;
      setQuoteStatus(quoteStorageWarning, true);
      return false;
    }
  };

  const renderQuote = () => {
    if (!quoteItemsContainer) return;
    quoteItemsContainer.replaceChildren();
    const totalQuantity = quoteItems.reduce((total, item) => total + item.quantity, 0);
    if (quoteCount) quoteCount.textContent = String(totalQuantity);
    if (quoteEmpty) quoteEmpty.hidden = quoteItems.length > 0;
    if (quoteClear) quoteClear.disabled = quoteItems.length === 0;
    if (quoteSend) {
      quoteSend.hidden = quoteItems.length === 0;
      const lines = quoteItems.map(({ id, quantity }) => {
        const product = productById.get(id);
        const reference = product.code ? ` · código YACO ${product.code}` : "";
        return `• ${quantity} × ${product.title}${reference}`;
      });
      quoteSend.href = `https://wa.me/${quotePhone}?text=${encodeURIComponent(`Hola, quisiera consultar precio y disponibilidad de estos productos:\n${lines.join("\n")}\n\n¿Podrían confirmar compatibilidad y stock?`)}`;
    }
    quoteItems.forEach(({ id, quantity }) => {
      const product = productById.get(id);
      const item = document.createElement("article");
      item.className = "quote-cart-item";
      const image = document.createElement("img");
      image.src = `../imagenes/${product.file}`;
      image.alt = "";
      image.loading = "lazy";
      const details = document.createElement("div");
      details.className = "quote-cart-item-details";
      const title = document.createElement("strong");
      title.textContent = product.title;
      const reference = document.createElement("span");
      reference.textContent = product.code ? `Código YACO · ${product.code}` : product.category;
      details.append(title, reference);
      const controls = document.createElement("div");
      controls.className = "quote-quantity";
      const decrease = document.createElement("button");
      decrease.type = "button";
      decrease.dataset.quoteAction = "decrease";
      decrease.dataset.quoteId = id;
      decrease.disabled = quantity <= 1;
      decrease.setAttribute("aria-label", `Disminuir cantidad de ${product.title}`);
      decrease.textContent = "−";
      const quantityLabel = document.createElement("span");
      quantityLabel.textContent = String(quantity);
      const increase = document.createElement("button");
      increase.type = "button";
      increase.dataset.quoteAction = "increase";
      increase.dataset.quoteId = id;
      increase.disabled = quantity >= 99;
      increase.setAttribute("aria-label", `Aumentar cantidad de ${product.title}`);
      increase.textContent = "+";
      controls.append(decrease, quantityLabel, increase);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "quote-remove";
      remove.dataset.quoteAction = "remove";
      remove.dataset.quoteId = id;
      remove.setAttribute("aria-label", `Quitar ${product.title} de la lista`);
      remove.textContent = "Quitar";
      item.append(image, details, controls, remove);
      quoteItemsContainer.append(item);
    });
    if (quoteStorageWarning) setQuoteStatus(quoteStorageWarning, true);
    else setQuoteStatus("La lista queda guardada en este navegador; no se envía ningún pedido.");
  };

  const addProductToQuote = (product) => {
    const existing = quoteItems.find((item) => item.id === product.id);
    if (existing) {
      if (existing.quantity >= 99) {
        setQuoteStatus("Cada artículo admite hasta 99 unidades en la lista.", true);
        return;
      }
      existing.quantity += 1;
    } else {
      quoteItems.push({ id: product.id, quantity: 1 });
    }
    const saved = saveQuote();
    renderQuote();
    if (saved) setQuoteStatus(`${product.title} agregado a la lista. La consulta todavía no se envió.`);
  };

  renderQuote();

  const renderProducts = () => {
    const matches = products.filter((product) => {
      const matchesCategory = !activeCategory || normalize(product.category) === activeCategory;
      const matchesBrand = !activeBrand || normalize(product.brand) === activeBrand;
      const matchesVehicle = !activeVehicle || normalize(product.vehicle) === activeVehicle;
      const matchesMeasure = !activeMeasure || getMeasure(product).toLocaleLowerCase("es") === activeMeasure;
      const searchText = normalize(`${product.code} ${product.brand} ${product.vehicle} ${product.title} ${product.category} ${product.detail} ${product.search || ""}`);
      return matchesCategory && matchesBrand && matchesVehicle && matchesMeasure && (!query || searchText.includes(normalize(query)));
    });
    if (currentSort === "name") matches.sort((a, b) => a.title.localeCompare(b.title, "es"));
    if (currentSort === "name-desc") matches.sort((a, b) => b.title.localeCompare(a.title, "es"));

    productsContainer.replaceChildren();
    productsContainer.classList.toggle("is-list-view", currentView === "list");
    productsContainer.classList.toggle("is-grid-view", currentView === "grid");
    if (countLabel) countLabel.textContent = String(matches.length);
    if (matches.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.innerHTML = "<strong>No encontramos coincidencias.</strong>Probá con otro código o consultanos para que te ayudemos.";
      productsContainer.append(empty);
      return;
    }

    const fragment = document.createDocumentFragment();
    matches.forEach((product, index) => {
      const card = document.createElement("article");
      card.className = "catalog-card";
      card.style.animationDelay = `${Math.min(index % 12 * 35, 385)}ms`;
      const image = document.createElement("img");
      image.src = `../imagenes/${product.file}`;
      image.alt = product.code ? `${product.title}, código YACO ${product.code}` : product.title;
      image.loading = "lazy";

      const imageWrap = document.createElement("div");
      imageWrap.className = "catalog-image";
      imageWrap.append(image);
      if (product.referenceImage) {
        const imageNote = document.createElement("span");
        imageNote.className = "catalog-image-note";
        imageNote.textContent = "Foto referencial";
        imageWrap.append(imageNote);
      }

      const body = document.createElement("div");
      body.className = "catalog-body";
      const title = document.createElement("h2");
      title.textContent = product.title;
      if (product.code) {
        const code = document.createElement("span");
        code.className = "catalog-product-code";
        code.textContent = `Código YACO · ${product.code}`;
        body.append(title, code);
      } else {
        body.append(title);
      }
      const detail = document.createElement("p");
      detail.className = "catalog-detail";
      detail.textContent = product.detail;
      const actions = document.createElement("div");
      actions.className = "catalog-actions";
      const features = document.createElement("button");
      features.className = "catalog-features";
      features.type = "button";
      features.innerHTML = "<span>Ver características</span><span aria-hidden=\"true\">↗</span>";
      features.setAttribute("aria-label", `Ver características de ${product.title}`);
      features.addEventListener("click", () => {
        if (!(productDialog instanceof HTMLDialogElement)) return;
        const dialogImage = productDialog.querySelector("[data-dialog-image]");
        const dialogCategory = productDialog.querySelector("[data-dialog-category]");
        const dialogTitle = productDialog.querySelector("[data-dialog-title]");
        const dialogCode = productDialog.querySelector("[data-dialog-code]");
        const dialogDescription = productDialog.querySelector("[data-dialog-description]");
          const dialogBrand = productDialog.querySelector("[data-dialog-brand]");
          const dialogVehicle = productDialog.querySelector("[data-dialog-vehicle]");
          const dialogSpecCategory = productDialog.querySelector("[data-dialog-spec-category]");
          const dialogMeasure = productDialog.querySelector("[data-dialog-measure]");
        const dialogImageNote = productDialog.querySelector("[data-dialog-image-note]");
        const dialogContact = productDialog.querySelector("[data-dialog-contact]");
        const dialogAdd = productDialog.querySelector("[data-dialog-add]");
        dialogImage.src = image.src;
        dialogImage.alt = image.alt;
        dialogCategory.textContent = product.category;
        dialogTitle.textContent = product.title;
        dialogCode.hidden = !product.code;
        dialogCode.textContent = product.code ? `Código YACO · ${product.code}` : "";
        dialogDescription.textContent = product.detail;
        dialogBrand.textContent = product.brand || "No especificada";
        dialogVehicle.textContent = product.vehicle || "Confirmar aplicación";
        dialogSpecCategory.textContent = product.category;
        dialogMeasure.textContent = getMeasure(product) || "Consultar";
        dialogImageNote.hidden = !product.referenceImage;
        dialogAdd.dataset.quoteAdd = product.id;
        dialogContact.href = `https://wa.me/${quotePhone}?text=${encodeURIComponent(getProductRequest(product))}`;
        productDialog.showModal();
      });
      const addToQuote = document.createElement("button");
      addToQuote.className = "catalog-add-to-quote";
      addToQuote.type = "button";
      addToQuote.dataset.quoteAdd = product.id;
      addToQuote.innerHTML = "<span>Agregar</span><span aria-hidden=\"true\">＋</span>";
      addToQuote.setAttribute("aria-label", `Agregar ${product.title} a Mi lista`);
      addToQuote.addEventListener("click", () => addProductToQuote(product));
      const action = document.createElement("a");
      action.className = "catalog-action";
      action.href = `https://wa.me/${quotePhone}?text=${encodeURIComponent(getProductRequest(product))}`;
      action.target = "_blank";
      action.rel = "noopener noreferrer";
      action.setAttribute("aria-label", product.code
        ? `Consultar por ${product.title}, código ${product.code}`
        : `Consultar por ${product.title}`);
      action.innerHTML = "<span>Consultar</span><span aria-hidden=\"true\">→</span>";
      actions.append(features, addToQuote, action);
      body.append(detail, actions);
      card.append(imageWrap, body);
      fragment.append(card);
    });
    productsContainer.append(fragment);
  };

  brandFilter?.addEventListener("change", () => { activeBrand = brandFilter.value; renderProducts(); });
  vehicleFilter?.addEventListener("change", () => { activeVehicle = vehicleFilter.value; renderProducts(); });
  categoryFilter?.addEventListener("change", () => { activeCategory = categoryFilter.value; renderProducts(); });
  measureFilter?.addEventListener("change", () => { activeMeasure = measureFilter.value; renderProducts(); });
  sortSelect?.addEventListener("change", () => { currentSort = sortSelect.value; renderProducts(); });
  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.view;
      viewButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      renderProducts();
    });
  });
  document.querySelector("[data-clear-filters]")?.addEventListener("click", () => {
    activeCategory = "";
    activeBrand = "";
    activeVehicle = "";
    activeMeasure = "";
    query = "";
    currentSort = "original";
    if (brandFilter) brandFilter.value = "";
    if (vehicleFilter) vehicleFilter.value = "";
    if (categoryFilter) categoryFilter.value = "";
    if (measureFilter) measureFilter.value = "";
    if (sortSelect) sortSelect.value = "original";
    searchInputs.forEach((input) => { input.value = ""; });
    if (queryLabel) queryLabel.textContent = "";
    window.history.replaceState({}, "", window.location.pathname);
    renderProducts();
  });

  productDialog?.querySelector("[data-dialog-close]")?.addEventListener("click", () => productDialog.close());
  productDialog?.querySelector("[data-dialog-add]")?.addEventListener("click", (event) => {
    const product = productById.get(event.currentTarget.dataset.quoteAdd);
    if (product) addProductToQuote(product);
  });
  productDialog?.addEventListener("click", (event) => {
    if (event.target === productDialog) productDialog.close();
  });
  document.querySelector("[data-quote-open]")?.addEventListener("click", () => quoteDialog?.showModal());
  quoteDialog?.querySelector("[data-quote-close]")?.addEventListener("click", () => quoteDialog.close());
  quoteDialog?.addEventListener("click", (event) => {
    if (event.target === quoteDialog) quoteDialog.close();
  });
  quoteItemsContainer?.addEventListener("click", (event) => {
    const control = event.target.closest("[data-quote-action]");
    if (!control) return;
    const item = quoteItems.find((entry) => entry.id === control.dataset.quoteId);
    if (!item) return;
    if (control.dataset.quoteAction === "remove") {
      quoteItems = quoteItems.filter((entry) => entry !== item);
    } else if (control.dataset.quoteAction === "increase" && item.quantity < 99) {
      item.quantity += 1;
    } else if (control.dataset.quoteAction === "decrease" && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      return;
    }
    saveQuote();
    renderQuote();
  });
  quoteClear?.addEventListener("click", () => {
    quoteItems = [];
    const saved = saveQuote();
    renderQuote();
    if (saved) setQuoteStatus("Lista vacía. No se envió ningún pedido.");
  });

  document.querySelectorAll("[data-search-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector('input[name="q"]');
      query = input.value.trim().toLocaleLowerCase("es");
      searchInputs.forEach((searchInput) => { searchInput.value = input.value.trim(); });
      if (queryLabel) queryLabel.textContent = query ? `Resultados para “${input.value.trim()}”` : "Todos los artículos";
      renderProducts();
      window.history.replaceState({}, "", query ? `?q=${encodeURIComponent(input.value.trim())}` : window.location.pathname);
      productsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  renderProducts();
}

document.querySelectorAll("[data-search-form]").forEach((form) => {
  if (productsContainer) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector('input[name="q"]');
    const url = form.dataset.productsUrl;
    window.location.href = `${url}${input.value.trim() ? `?q=${encodeURIComponent(input.value.trim())}` : ""}`;
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute("aria-label", expanded ? "Abrir menú" : "Cerrar menú");
    primaryNav.classList.toggle("is-open", !expanded);
    document.body.classList.toggle("menu-open", !expanded);
  });
  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      primaryNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }
  });
}

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const slides = [...carousel.querySelectorAll("[data-slide]")];
  const currentLabel = carousel.querySelector("[data-slide-current]");
  let current = 0;
  let timer;
  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    if (currentLabel) currentLabel.textContent = String(current + 1).padStart(2, "0");
  };
  const restartTimer = () => {
    window.clearInterval(timer);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = window.setInterval(() => showSlide(current + 1), 6000);
    }
  };
  carousel.querySelector("[data-slide-prev]")?.addEventListener("click", () => { showSlide(current - 1); restartTimer(); });
  carousel.querySelector("[data-slide-next]")?.addEventListener("click", () => { showSlide(current + 1); restartTimer(); });
  restartTimer();
});

document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const message = form.querySelector("[data-form-message]");
    if (message) {
      message.hidden = false;
      message.focus();
    }
    form.reset();
  });
});

document.querySelectorAll("[data-demo-login]").forEach((form) => {
  const status = form.querySelector("[data-account-status]");
  const showStatus = (message) => {
    if (!status) return;
    status.textContent = message;
    status.hidden = false;
    status.focus();
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    showStatus("El acceso no está conectado al sistema de pedidos. Para esta demo, continuá como invitado.");
  });

  form.querySelector("[data-recover-password]")?.addEventListener("click", () => {
    showStatus("La recuperación de contraseña no está disponible en esta demo. Comunicate con Distrigom para recibir ayuda.");
  });

  form.querySelector("[data-toggle-password]")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const password = form.querySelector("#account-password");
    const reveal = password.type === "password";
    password.type = reveal ? "text" : "password";
    button.textContent = reveal ? "Ocultar" : "Mostrar";
    button.setAttribute("aria-label", reveal ? "Ocultar contraseña" : "Mostrar contraseña");
    button.setAttribute("aria-pressed", String(reveal));
  });
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".section-heading, .featured-card, .step-card, .value-card, .contact-panel").forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}
