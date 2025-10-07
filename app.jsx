import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import doctorImage from './assets/doctor.png';
import userOlenaImage from './assets/user_olena.png';
import userIvanImage from './assets/user_ivan.png';
import './App.css'

function App() {
  const productUrl = "https://promoshopmedias.com/page/559f44584623df66b692e5431764aa4db3c4074e/";

  const reviews = [
    {
      name: "Олена",
      age: 58,
      text: "Мої суглоби почали турбувати мене вже давно, особливо коліна. Спробувала ArthroLead за рекомендацією подруги і була приємно здивована. Біль став значно меншим, і я знову можу гуляти з онуками без дискомфорту. Дуже вдячна за цей засіб!",
      photo: userOlenaImage
    },
    {
      name: "Іван",
      age: 62,
      text: "Після багатьох років роботи на будівництві суглоби рук і спинали давали про себе знати. ArthroLead допоміг мені повернутися до нормального життя. Відчуваю себе набагато краще, рухи стали вільнішими. Рекомендую всім, хто страждає від болю в суглобах.",
      photo: userIvanImage
    },
    {
      name: "Галина",
      age: 50,
      text: "Я завжди була активною, але останнім часом біль у плечі не давав мені спокою. ArthroLead став моїм порятунком. Приймаю його вже місяць, і результат помітний. Біль майже зник, і я знову можу займатися своїми улюбленими справами. Дякую виробникам!"
    },
    {
      name: "Петро",
      age: 65,
      text: "Спробував ArthroLead, але, чесно кажучи, особливого ефекту не відчув. Можливо, мені не підійшов, або я щось робив не так.",
      isNeutral: true,
      adminReply: "Шановний Петро, дякуємо за ваш відгук. Деякі дослідження показують, що надмірне споживання кофеїну може впливати на засвоєння певних поживних речовин, важливих для здоров'я суглобів. Спробуйте зменшити споживання кави та інших кофеїновмісних напоїв під час курсу прийому ArthroLead. Сподіваємося, це допоможе вам відчути позитивний ефект.",
      userReply: "Ви маєте рацію, я дійсно п'ю багато кави. Спробую вашу пораду. Дякую за відповідь!"
    },
    {
      name: "Марія",
      age: 70,
      text: "З віком суглоби стали дуже боліти, особливо вранці. ArthroLead допомогла мені знову відчути легкість у рухах. Це справжнє диво! Дуже вдячна за такий ефективний засіб."
    },
    {
      name: "Сергій",
      age: 55,
      text: "Завжди скептично ставився до таких засобів, але біль у колінах змусив спробувати. ArthroLead дійсно працює! Через кілька тижнів прийому біль зменшився, і я знову можу займатися спортом. Чудовий продукт!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - News Site Style */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-900">Здоров'я України</h1>
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              ЗДОРОВ'Я
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Біль у суглобах: Розуміння проблеми та шляхи вирішення
          </h1>
          
          <div className="text-sm text-gray-500 mb-6 flex items-center gap-4">
            <span>Опубліковано: {new Date().toLocaleDateString('uk-UA')}</span>
            <span>•</span>
            <span>Читання: 5 хв</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Біль у суглобах є поширеною проблемою, яка може значно впливати на якість життя. Вона може виникати з різних причин, від природного зносу до запальних процесів та травм. Розуміння основних причин та доступних методів лікування є ключовим для ефективного управління цим станом.
            </p>

            <img src={doctorImage} alt="Doctor discussing joint health" className="w-full h-auto rounded-lg mb-6" />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Поширені причини болю в суглобах
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Остеоартроз (ОА)</strong> є найпоширенішою формою артриту, що вражає мільйони людей у всьому світі. Це дегенеративне захворювання суглобів, при якому руйнується хрящ, що покриває кінці кісток у суглобі. З часом хрящ стає тоншим і шорсткішим, що призводить до тертя кісток одна об одну, викликаючи біль, скутість та обмеження рухів.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Ревматоїдний артрит (РА)</strong> – це хронічне аутоімунне захворювання, при якому імунна система організму помилково атакує власні тканини, зокрема оболонку суглобів. Це призводить до запалення, болю, набряку та, з часом, до ерозії кісток та деформації суглобів.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Інші поширені причини включають бурсит, тендиніт, подагру та травми.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Шляхи вирішення та підтримка здоров'я суглобів
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Лікування болю в суглобах залежить від його причини та тяжкості. Воно може включати медикаментозне лікування, фізіотерапію та зміни способу життя.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Деякі дієтичні добавки можуть відігравати допоміжну роль у підтримці здоров'я суглобів та зменшенні болю, особливо при остеоартрозі. Серед них: глюкозамін, хондроїтин, омега-3 жирні кислоти та куркумін.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 font-bold">
              Нещодавно з'явився натуральний комплекс, який запускає регенерацію хряща. Без хімії, без побічних ефектів. Люди реально перестають відчувати біль вже через 5–7 днів. Спробуйте і живіть без болю!
            </p>

            {/* Call to Action - Embedded in Article */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                ArthroLead: Підтримка для ваших суглобів
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                На ринку представлено багато продуктів, спрямованих на підтримку здоров'я суглобів. <strong>ArthroLead</strong> – це дієтична добавка, розроблена для підтримки функціонування суглобів та зменшення дискомфорту. Вона містить комплекс інгредієнтів, які сприяють відновленню хрящової тканини та зменшенню запалення.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-bold text-blue-700">
                <span className="text-red-600">Увага:</span> Скористайтеся спеціальною пропозицією – перший замовлення ArthroLead може бути безкоштовним! Поспішайте, кількість обмежена.
              </p>
              <Button 
                onClick={() => window.location.href = productUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg animate-pulse"
              >
                Замовити ArthroLead (Перший замовлення безкоштовно!)
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Висновок
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Біль у суглобах – це складна проблема, яка вимагає комплексного підходу. Важливо звернутися до лікаря для точної діагностики та розробки індивідуального плану лікування. Додатково, такі продукти, як <a href={productUrl} className="text-blue-600 hover:text-blue-800 underline">ArthroLead</a>, можуть стати частиною вашої стратегії для підтримки здоров'я суглобів та покращення якості життя.
            </p>
          </div>
        </article>

        {/* Reviews Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Відгуки користувачів
          </h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <Card key={index} className={`${review.isNeutral ? 'border-yellow-200 bg-yellow-50' : 'border-gray-200'}`}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {review.photo ? (
                        <img 
                          src={review.photo} 
                          alt={review.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 shadow-sm"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                          {review.name[0]}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <span className="text-sm text-gray-500">• {review.age} років</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        {review.text}
                      </p>
                      
                      {review.adminReply && (
                        <div className="mt-4 ml-8 border-l-2 border-blue-300 pl-4 bg-blue-50 p-3 rounded-r">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-blue-800">Відповідь Медичного спеціаліста</span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {review.adminReply}
                          </p>
                        </div>
                      )}
                      
                      {review.userReply && (
                        <div className="mt-3 ml-8 border-l-2 border-green-300 pl-4 bg-green-50 p-3 rounded-r">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-green-800">{review.name}</span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {review.userReply}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Готові покращити здоров'я своїх суглобів?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Замовте ArthroLead сьогодні та відчуйте різницю
          </p>
          <Button 
            onClick={() => window.location.href = productUrl}
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-md hover:shadow-xl animate-pulse"
          >
            Замовити зараз (Перший замовлення безкоштовно!)
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Здоров'я України. Всі права захищені.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Інформація на цьому сайті носить інформаційний характер і не є медичною консультацією. Проконсультуйтеся з лікарем перед початком прийому будь-яких добавок.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
