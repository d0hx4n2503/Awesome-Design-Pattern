const fs = require("node:fs");
const path = require("node:path");

const labels = {
  creational: { en: "Creational", vi: "Khởi tạo", zh: "创建型" },
  structural: { en: "Structural", vi: "Cấu trúc", zh: "结构型" },
  behavioral: { en: "Behavioral", vi: "Hành vi", zh: "行为型" },
};

const localizedTitles = {
  vi: {
    "abstract-factory": "Abstract Factory",
    adapter: "Adapter",
    bridge: "Bridge",
    builder: "Builder",
    "chain-of-responsibility": "Chain of Responsibility",
    command: "Command",
    composite: "Composite",
    decorator: "Decorator",
    facade: "Facade",
    "factory-method": "Factory Method",
    flyweight: "Flyweight",
    interpreter: "Interpreter",
    iterator: "Iterator",
    mediator: "Mediator",
    memento: "Memento",
    observer: "Observer",
    prototype: "Prototype",
    proxy: "Proxy",
    singleton: "Singleton",
    state: "State",
    strategy: "Strategy",
    "template-method": "Template Method",
    visitor: "Visitor",
  },
  zh: {
    "abstract-factory": "抽象工厂",
    adapter: "适配器",
    bridge: "桥接",
    builder: "建造者",
    "chain-of-responsibility": "职责链",
    command: "命令",
    composite: "组合",
    decorator: "装饰器",
    facade: "外观",
    "factory-method": "工厂方法",
    flyweight: "享元",
    interpreter: "解释器",
    iterator: "迭代器",
    mediator: "中介者",
    memento: "备忘录",
    observer: "观察者",
    prototype: "原型",
    proxy: "代理",
    singleton: "单例",
    state: "状态",
    strategy: "策略",
    "template-method": "模板方法",
    visitor: "访问者",
  },
};

const guides = {
  vi: {
    strategy: {
      intent:
        "Đóng gói các thuật toán hoặc chính sách có thể thay thế cho nhau sau một interface chung.",
      problem:
        "Khi pricing, validation, shipping hoặc routing bắt đầu có nhiều nhánh `if/else`, workflow chính sẽ phải biết quá nhiều rule và rất khó test từng rule riêng.",
      core: "Giữ workflow ổn định trong context, còn từng biến thể hành vi được đưa vào các strategy riêng. Context chỉ gọi interface, không biết concrete strategy.",
      use: [
        "Có nhiều thuật toán cùng input/output.",
        "Rule thay đổi theo tenant, plan, quốc gia hoặc config.",
        "Muốn thêm rule mới mà không sửa workflow chính.",
      ],
      avoid: [
        "Chỉ có một thuật toán.",
        "Một callback đơn giản đã đủ rõ.",
        "Các biến thể có input khác nhau đến mức interface bị gượng ép.",
      ],
    },
    "factory-method": {
      intent:
        "Ẩn việc tạo object cụ thể sau một factory method để workflow không phụ thuộc trực tiếp vào class concrete.",
      problem:
        "Khi code gọi `new` ở nhiều nơi, việc thêm provider hoặc product mới thường kéo theo sửa nhiều workflow vốn không nên biết chi tiết khởi tạo.",
      core: "Workflow phụ thuộc vào product interface. Factory method quyết định concrete product nào được tạo.",
      use: [
        "Object cần tạo thay đổi theo config hoặc input.",
        "Caller chỉ nên biết contract, không biết class cụ thể.",
        "Quá trình tạo có setup/validation/defaults.",
      ],
      avoid: [
        "Constructor trực tiếp vẫn rõ ràng.",
        "Cần tạo cả họ object liên quan; cân nhắc Abstract Factory.",
        "Factory chỉ bọc `new` mà không giảm coupling.",
      ],
    },
    adapter: {
      intent:
        "Chuyển interface bên ngoài hoặc legacy sang interface mà application thật sự muốn dùng.",
      problem:
        "SDK bên thứ ba thường có data shape, error model và naming khác domain. Nếu dùng trực tiếp, chi tiết vendor lan khắp codebase.",
      core: "Application sở hữu target interface. Adapter đứng ở boundary, chuyển đổi input/output/error giữa domain và hệ thống ngoài.",
      use: [
        "Tích hợp payment, email, storage, analytics SDK.",
        "Migration từ legacy API.",
        "Muốn cô lập vendor lock-in.",
      ],
      avoid: [
        "Bạn sở hữu cả hai interface và có thể refactor thẳng.",
        "Adapter chỉ đổi tên method mà không bảo vệ domain.",
        "Boundary quá lớn cần anti-corruption layer đầy đủ.",
      ],
    },
    observer: {
      intent:
        "Cho nhiều subscriber phản ứng với một thay đổi mà subject không cần biết subscriber cụ thể.",
      problem:
        "Nếu subject gọi trực tiếp email, analytics, cache, UI update..., mỗi thay đổi nhỏ tạo coupling và side effect khó lần theo.",
      core: "Subject phát event qua contract chung. Subscriber đăng ký/hủy đăng ký và xử lý event độc lập.",
      use: [
        "Một event có nhiều phản ứng độc lập.",
        "Subscriber có thể xuất hiện hoặc biến mất runtime.",
        "Publisher không nên phụ thuộc vào concrete listener.",
      ],
      avoid: [
        "Thứ tự xử lý là business-critical.",
        "Failure của subscriber phải rollback publisher.",
        "Hệ phân tán cần message broker thật sự.",
      ],
    },
    decorator: {
      intent:
        "Bọc object để thêm behavior tùy chọn nhưng vẫn giữ nguyên interface.",
      problem:
        "Logging, caching, retry, auth nếu nhét vào core class sẽ làm class phình to; nếu dùng subclass cho mọi tổ hợp sẽ nổ số lượng class.",
      core: "Decorator implement cùng interface với object gốc, làm thêm việc trước/sau khi delegate.",
      use: [
        "Cần stack behavior như cache + log + retry.",
        "Muốn bật/tắt behavior bằng composition.",
        "Không muốn sửa class lõi.",
      ],
      avoid: [
        "Behavior làm đổi contract public.",
        "Thứ tự decorator quá khó hiểu.",
        "Function composition đơn giản đã đủ.",
      ],
    },
    facade: {
      intent:
        "Cung cấp một API đơn giản, theo use case, che đi orchestration phức tạp phía sau.",
      problem:
        "Nhiều caller cùng phải gọi cart, inventory, payment, email theo đúng thứ tự sẽ tạo duplication và lỗi khó kiểm soát.",
      core: "Facade gom workflow phổ biến thành một entry point rõ nghĩa, xử lý ordering và error ở một nơi.",
      use: [
        "Một use case cần phối hợp nhiều subsystem.",
        "Caller chỉ cần thao tác mức nghiệp vụ.",
        "Muốn thống nhất error handling.",
      ],
      avoid: [
        "Facade thành god service chứa mọi thứ.",
        "Caller cần kiểm soát chi tiết từng subsystem.",
        "Bạn đang che giấu domain model nên được tách rõ hơn.",
      ],
    },
    builder: {
      intent:
        "Tạo object phức tạp từng bước với tên method rõ nghĩa và validation ở bước build.",
      problem:
        "Constructor nhiều tham số hoặc object config lớn dễ sai thứ tự, thiếu field bắt buộc, hoặc tạo trạng thái không hợp lệ.",
      core: "Builder gom lựa chọn cấu hình, đặt default rõ ràng và chỉ trả object khi dữ liệu hợp lệ.",
      use: [
        "Có nhiều option/default/combination.",
        "Muốn code tạo object đọc như mô tả nghiệp vụ.",
        "Test fixture cần setup dễ hiểu.",
      ],
      avoid: [
        "Object chỉ có vài field đơn giản.",
        "Object literal + validation đã đủ.",
        "Builder cho phép state sai thoát ra ngoài.",
      ],
    },
    command: {
      intent:
        "Biến một hành động thành object để có thể queue, retry, audit, undo hoặc execute later.",
      problem:
        "Khi UI, API, worker gọi service trực tiếp, logic retry, permission, logging và undo dễ bị lặp ở nhiều nơi.",
      core: "Command chứa payload và hành vi execute. Invoker chỉ biết gọi command, receiver giữ domain rule của nó.",
      use: [
        "Cần queue job hoặc retry.",
        "Cần audit/undo/redo.",
        "Muốn chuẩn hóa application use case.",
      ],
      avoid: [
        "Action chỉ là một call đơn giản.",
        "Command chỉ lặp lại tên method.",
        "Bạn đang trộn command với query làm side effect mơ hồ.",
      ],
    },
    iterator: {
      intent: "Duyệt collection mà không lộ cách lưu trữ bên trong.",
      problem:
        "Caller phụ thuộc vào page token, index, tree node hoặc cursor khiến việc đổi storage/fetching strategy trở nên đắt đỏ.",
      core: "Collection cung cấp protocol traversal ổn định; chi tiết array, page, cursor hoặc tree được giấu phía sau iterator.",
      use: [
        "Dữ liệu lấy theo page/cursor.",
        "Có nhiều cách traversal.",
        "Muốn xử lý lazy collection.",
      ],
      avoid: [
        "Array loop bình thường đã rõ.",
        "Caller cần random access.",
        "Iteration che giấu network call đắt đỏ mà không document.",
      ],
    },
    singleton: {
      intent: "Đảm bảo chỉ có một instance dùng chung trong phạm vi process.",
      problem:
        "Một số infrastructure như config hoặc logger cần shared lifecycle; nhiều instance có thể gây state lệch hoặc tốn resource.",
      core: "Ẩn constructor và cung cấp access point có kiểm soát cho shared instance.",
      use: [
        "Một instance process-wide là invariant thật.",
        "Object quản lý infrastructure, không phải state theo user/request.",
        "Lifecycle dễ reset khi test.",
      ],
      avoid: [
        "Chỉ muốn global variable tiện tay.",
        "Object chứa mutable state nghiệp vụ.",
        "Dependency injection quản lý lifetime rõ hơn.",
      ],
    },
    "template-method": {
      intent:
        "Cố định khung workflow trong base class và cho subclass tùy biến một số bước.",
      problem:
        "Nhiều workflow giống thứ tự nhưng khác vài bước thường bị copy-paste, dẫn đến validation/logging/error handling không nhất quán.",
      core: "Base class giữ skeleton algorithm; subclass override hook cụ thể.",
      use: [
        "Thứ tự workflow phải ổn định.",
        "Chỉ một vài bước thay đổi.",
        "Bạn kiểm soát inheritance hierarchy.",
      ],
      avoid: [
        "Composition rõ hơn inheritance.",
        "Subclass cần đổi thứ tự workflow.",
        "Base class có nguy cơ thành fragile god class.",
      ],
    },
    proxy: {
      intent:
        "Đứng thay object thật để kiểm soát access nhưng giữ cùng interface.",
      problem:
        "Caching, auth, lazy loading hoặc remote call nếu nhét vào subject sẽ trộn infrastructure concern với logic lõi.",
      core: "Proxy implement cùng interface, quyết định khi nào delegate cho subject thật.",
      use: [
        "Cần cache/lazy/auth/rate limit.",
        "Client không cần biết đang gọi proxy hay object thật.",
        "Muốn cô lập cross-cutting concern.",
      ],
      avoid: [
        "Interface cần đổi; dùng Adapter.",
        "Behavior tùy chọn cần stack; cân nhắc Decorator.",
        "Proxy che giấu latency/security quá nhiều.",
      ],
    },
    composite: {
      intent: "Đối xử leaf và group giống nhau trong cấu trúc cây.",
      problem:
        "Caller phải liên tục hỏi object là file hay folder, item hay group, node hay container; logic recursion bị rải khắp nơi.",
      core: "Leaf và composite cùng implement component interface. Composite chứa children và delegate operation xuống cây.",
      use: [
        "Domain tự nhiên là tree.",
        "Caller nên thao tác leaf/group thống nhất.",
        "Operation có thể chạy recursive.",
      ],
      avoid: [
        "Structure phẳng.",
        "Leaf và group có operation rất khác.",
        "Có nguy cơ cycle/performance mà pattern che mất.",
      ],
    },
    state: {
      intent:
        "Thay đổi behavior theo lifecycle state bằng cách đưa từng state thành object riêng.",
      problem:
        "Các enum status như draft/paid/shipped/cancelled kéo theo nhiều `if status` rải rác, dễ cho phép transition sai.",
      core: "Context delegate behavior cho current state. Mỗi state biết action nào hợp lệ và transition nào được phép.",
      use: [
        "Behavior phụ thuộc mạnh vào lifecycle.",
        "Invalid transition cần bị chặn rõ ràng.",
        "Conditional theo status đang lan rộng.",
      ],
      avoid: [
        "State chỉ là dữ liệu hiển thị.",
        "Hai trạng thái đơn giản dùng if rõ hơn.",
        "Workflow table/config phù hợp hơn.",
      ],
    },
    "chain-of-responsibility": {
      intent:
        "Cho request đi qua chuỗi handler theo thứ tự, handler có thể xử lý, reject hoặc forward.",
      problem:
        "Auth, validation, throttling, enrichment nếu nằm trong một function lớn sẽ khó thay đổi từng bước và khó test lỗi sớm.",
      core: "Mỗi handler giữ một trách nhiệm nhỏ và quyết định stop/continue rõ ràng.",
      use: [
        "Có pipeline ordered như middleware.",
        "Một bước có thể stop sớm.",
        "Muốn cấu hình chain khác nhau theo route/product.",
      ],
      avoid: [
        "Mọi bước luôn phải chạy.",
        "Order không có ý nghĩa.",
        "Pipeline function đơn giản đã đủ.",
      ],
    },
    "abstract-factory": {
      intent:
        "Tạo các họ object liên quan sao cho chúng luôn tương thích với nhau.",
      problem:
        "Client tự chọn từng concrete product có thể vô tình trộn light button với dark modal hoặc AWS storage với GCP queue.",
      core: "Abstract factory tạo nhiều product interface thuộc cùng một family; concrete factory đảm bảo consistency.",
      use: [
        "Cần family theo theme/provider/platform.",
        "Muốn chặn tổ hợp product không hợp lệ.",
        "Runtime environment quyết định family.",
      ],
      avoid: [
        "Chỉ có một product thay đổi.",
        "Family không thật sự liên quan.",
        "Factory interface phình quá nhanh.",
      ],
    },
    prototype: {
      intent: "Tạo object mới bằng cách clone từ prototype đã cấu hình sẵn.",
      problem:
        "Object có nhiều default hoặc setup đắt đỏ nếu dựng lại từ đầu ở nhiều nơi sẽ dễ lệch cấu hình.",
      core: "Prototype giữ baseline; clone tạo bản độc lập và override phần cần khác.",
      use: [
        "Template email/document/config.",
        "Test fixture cần biến thể nhỏ.",
        "Object creation tốn kém hoặc dài dòng.",
      ],
      avoid: [
        "Copy semantics không rõ.",
        "Có resource/identity không được clone.",
        "Object tạo trực tiếp vẫn đơn giản.",
      ],
    },
    mediator: {
      intent:
        "Tập trung coordination giữa nhiều component để chúng không reference trực tiếp nhau.",
      problem:
        "Nhiều component gọi chéo nhau tạo dependency mesh, sửa một component phải hiểu toàn bộ mạng tương tác.",
      core: "Component gửi message qua mediator; mediator giữ rule phối hợp trong một boundary rõ ràng.",
      use: [
        "Form/dialog/workflow có nhiều component tương tác.",
        "Coordination rule thay đổi nhiều hơn component.",
        "Muốn component reusable.",
      ],
      avoid: [
        "Chỉ hai object giao tiếp rõ ràng.",
        "Mediator thành god object.",
        "Pub/sub domain event phù hợp hơn.",
      ],
    },
    bridge: {
      intent:
        "Tách abstraction khỏi implementation để hai chiều biến thể phát triển độc lập.",
      problem:
        "Hai trục biến thể tạo class explosion như EmailPdfReport, SmsPdfReport, EmailHtmlReport...",
      core: "Một chiều nằm ở abstraction, chiều còn lại nằm sau implementation interface.",
      use: [
        "Có hai variation axes độc lập.",
        "Muốn thay implementation mà không đổi abstraction.",
        "Subclass combination đang tăng nhanh.",
      ],
      avoid: [
        "Chỉ có một trục biến thể.",
        "Strategy đủ đơn giản hơn.",
        "Hai phía không thật sự độc lập.",
      ],
    },
    visitor: {
      intent:
        "Thêm operation mới cho object structure ổn định mà không sửa class element.",
      problem:
        "Tree/domain object cần nhiều operation như render, validate, export, metrics; nhét hết vào element làm model phình và lẫn concern.",
      core: "Element accept visitor; visitor chứa logic operation theo từng element type.",
      use: [
        "Object structure ổn định.",
        "Operation mới xuất hiện thường xuyên.",
        "Cần xử lý type-specific trên tree/AST.",
      ],
      avoid: [
        "Element type thay đổi thường xuyên.",
        "Discriminated union rõ hơn.",
        "Chỉ có một operation đơn giản.",
      ],
    },
    memento: {
      intent:
        "Lưu và khôi phục state snapshot mà không expose internals của object.",
      problem:
        "Undo/rollback/draft recovery cần state cũ; nếu caller copy field private sẽ phá encapsulation.",
      core: "Originator tạo memento immutable; caretaker chỉ lưu giữ; originator tự restore từ snapshot.",
      use: [
        "Cần undo/redo.",
        "Cần checkpoint trước thao tác rủi ro.",
        "State restore phải atomic.",
      ],
      avoid: [
        "State quá lớn.",
        "Snapshot chứa dữ liệu nhạy cảm khó kiểm soát.",
        "Event sourcing phù hợp hơn.",
      ],
    },
    flyweight: {
      intent:
        "Chia sẻ phần state bất biến giữa rất nhiều object nhỏ để giảm memory.",
      problem:
        "Hàng nghìn marker/glyph/tile lặp lại cùng style hoặc metadata gây tốn memory không cần thiết.",
      core: "Tách intrinsic state dùng chung khỏi extrinsic state riêng từng lần dùng.",
      use: [
        "Có rất nhiều object giống nhau.",
        "Memory pressure đo được.",
        "Shared state immutable.",
      ],
      avoid: [
        "Số object nhỏ.",
        "Shared state mutable/user-specific.",
        "Chưa đo được lợi ích memory.",
      ],
    },
    interpreter: {
      intent:
        "Biểu diễn và evaluate một DSL nhỏ hoặc expression tree bằng object model rõ ràng.",
      problem:
        "Rule dạng string, filter hoặc condition phức tạp nếu parse/evaluate ad-hoc sẽ khó mở rộng và khó báo lỗi.",
      core: "Mỗi grammar concept là expression object; expression evaluate dựa trên context.",
      use: [
        "DSL nhỏ và ổn định.",
        "Rule cần compose/store/inspect.",
        "Feature flag, filter, eligibility rule.",
      ],
      avoid: [
        "Grammar lớn hoặc thay đổi liên tục.",
        "Parser/rules engine có sẵn phù hợp hơn.",
        "Predicate đơn giản đã đủ.",
      ],
    },
  },
};

guides.zh = Object.fromEntries(
  Object.keys(guides.vi).map((slug) => [
    slug,
    {
      intent: `用 ${localizedTitles.zh[slug]} 模式把变化点放到清晰的抽象边界后面。`,
      problem: `当代码开始因为不同规则、状态、提供商或结构而出现大量条件分支时，稳定流程会被迫理解太多细节。`,
      core: `${localizedTitles.zh[slug]} 的核心是让调用方依赖稳定契约，把真正变化的部分移动到独立对象或协作结构中。`,
      use: [
        `已经存在多个真实变体，并且这些变体会继续增长。`,
        `调用方不应该知道 ${localizedTitles.zh[slug]} 背后的具体实现细节。`,
        `引入该模式后，新增规则、状态、产品或协作者不需要修改稳定流程。`,
      ],
      avoid: [
        `当前只有一个实现，而且短期内没有真实变化压力。`,
        `一个普通函数、对象字面量、配置表或依赖注入已经足够清晰。`,
        `引入该模式会让运行时流程更难追踪，而不是更容易维护。`,
      ],
    },
  ]),
);

const sections = {
  vi: {
    intent: "Mục đích",
    problem: "Vấn đề",
    core: "Ý tưởng cốt lõi",
    perspective: "Góc nhìn thực tế",
    useCases: "Tình huống áp dụng thực tế",
    whenUse: "Khi nên dùng",
    whenAvoid: "Khi không nên dùng",
    checklist: "Checklist thiết kế",
    mistakes: "Lỗi thường gặp",
    testing: "Hướng dẫn kiểm thử",
    implementation: "Triển khai TypeScript",
  },
  zh: {
    intent: "意图",
    problem: "问题",
    core: "核心思想",
    perspective: "实战视角",
    useCases: "真实场景",
    whenUse: "适用场景",
    whenAvoid: "不适用场景",
    checklist: "设计检查清单",
    mistakes: "常见错误",
    testing: "测试建议",
    implementation: "TypeScript 实现",
  },
};

function list(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function renderLocalized(locale, slug, group) {
  const s = sections[locale];
  const guide = guides[locale][slug];
  const title = localizedTitles[locale][slug];
  if (!guide) throw new Error(`Missing localized guide for ${locale}/${slug}`);

  if (locale === "vi") {
    return `# ${title}

## ${s.intent}

${guide.intent}

## ${s.problem}

${guide.problem}

## ${s.core}

${guide.core}

## ${s.perspective}

${title} không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## ${s.useCases}

${list([`Dự án TypeScript có phần ${labels[group].vi.toLowerCase()} đang tăng biến thể.`, "Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.", "Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow."])}

## ${s.whenUse}

${list(guide.use)}

## ${s.whenAvoid}

${list(guide.avoid)}

## ${s.checklist}

${list(["Bắt đầu từ caller: caller thật sự cần contract nào?", "Đặt tên abstraction theo domain, không chỉ theo tên pattern.", "Giữ concrete class nhỏ và chỉ có một lý do để thay đổi.", "Test qua public interface thay vì private detail.", "Nếu thêm pattern làm code khó đọc hơn, hãy quay lại giải pháp đơn giản hơn."])}

## ${s.mistakes}

${list(["Áp dụng pattern khi mới có một biến thể giả định.", "Tạo interface chỉ để bọc một class cùng tên.", "Ẩn runtime flow khiến debug khó hơn.", "Dùng pattern để khoe kiến thức thay vì giải quyết pressure thật."])}

## ${s.testing}

${list(["Test từng concrete behavior hoặc collaborator riêng.", "Test caller với fake implementation để chứng minh boundary hữu ích.", "Thêm case lỗi/edge case đúng với lý do bạn chọn pattern."])}

## ${s.implementation}

Thư mục pattern có ví dụ TypeScript chạy được trong \`index.ts\`. Hãy đọc code cùng test tương ứng để thấy pattern boundary nằm ở đâu và vì sao caller không cần phụ thuộc vào chi tiết triển khai.
`;
  }

  return `# ${title}

## ${s.intent}

${guide.intent}

## ${s.problem}

${guide.problem}

## ${s.core}

${guide.core}

## ${s.perspective}

不要为了“用了设计模式”而使用 ${title}。它应该解决真实的变化压力：减少错误依赖、降低未来修改成本，并让测试边界更清晰。

## ${s.useCases}

${list([`TypeScript 项目中的${labels[group].zh}职责正在出现多个变体。`, "同一个决策点周围开始出现越来越多条件分支。", "团队需要一种新人也能快速理解的运行时结构。"])}

## ${s.whenUse}

${list(guide.use)}

## ${s.whenAvoid}

${list(guide.avoid)}

## ${s.checklist}

${list(["先看调用方真正需要什么契约。", "抽象命名应来自业务语义，而不只是模式名称。", "保持具体类小而聚焦。", "通过公共接口测试行为，而不是测试私有细节。", "如果模式让代码更难读，应回到更简单的设计。"])}

## ${s.mistakes}

${list(["只有假想变化点就提前引入模式。", "创建只包了一层同名类的空抽象。", "隐藏运行时流程，导致调试更困难。", "为了展示模式知识而不是解决真实问题。"])}

## ${s.testing}

${list(["单独测试每个具体行为或协作者。", "用 fake implementation 测试调用方，证明边界有价值。", "补充与选用该模式原因相关的失败路径和边界情况。"])}

## ${s.implementation}

该模式目录中的 \`index.ts\` 提供可运行的 TypeScript 示例。建议结合对应测试一起阅读，重点关注调用方依赖的抽象边界，而不是具体类的名字。
`;
}

const patternRoot = path.join(process.cwd(), "patterns");
for (const group of fs.readdirSync(patternRoot)) {
  const groupDir = path.join(patternRoot, group);
  if (!fs.statSync(groupDir).isDirectory()) continue;
  for (const slug of fs.readdirSync(groupDir)) {
    const readmePath = path.join(groupDir, slug, "README.md");
    if (!fs.existsSync(readmePath)) continue;
    const body = fs.readFileSync(readmePath, "utf8").trim();
    const title = body.split(/\r?\n/)[0].replace(/^#\s+/, "").trim();
    for (const locale of ["en", "vi", "zh"]) {
      const outDir = path.join(
        process.cwd(),
        "docs",
        "content",
        locale,
        "patterns",
        group,
      );
      fs.mkdirSync(outDir, { recursive: true });
      const outPath = path.join(outDir, slug + ".md");
      const pageTitle = locale === "en" ? title : localizedTitles[locale][slug];
      const content =
        locale === "en" ? body : renderLocalized(locale, slug, group);
      const frontmatter =
        "---\n" +
        `title: "${pageTitle}"\n` +
        `slug: "${slug}"\n` +
        `group: "${group}"\n` +
        `groupLabel: "${labels[group][locale]}"\n` +
        `source: "patterns/${group}/${slug}/README.md"\n` +
        "---\n\n";
      fs.writeFileSync(outPath, frontmatter + content.trim() + "\n", "utf8");
    }
  }
}
