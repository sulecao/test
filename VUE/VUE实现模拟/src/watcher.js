class Dep {
  constructor() {
    this.deps = []
  }
  addDep(watch) {
    this.deps.push(watch)
  }
  notify() {
    this.deps.forEach(item => item.update())
  }
}

class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb

    Dep.target = this;
    this.vm[this.key]; // 触发getter，添加依赖
    Dep.target = null;
  }
  update() {
    this.cb.call(this.vm, this.vm[this.key])
  }
}