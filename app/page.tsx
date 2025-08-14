"use client";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white p-8 font-lao text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧾 KIPTEXT API · ຄູ່ມືນຳໃຊ້</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">📌 ວິທີໃຊ້ · How to Use</h2>
        <p className="mt-2">
          ສົ່ງ <strong>GET request</strong> ໄປທີ່ 
          <code className="bg-gray-100 px-1 mx-1">/api/kiptext</code> 
          ພ້ອມກັບ <code className="bg-gray-100 px-1">?number=</code> ຕົວເລກ.
        </p>
        <p className="mt-1">
          Send a <strong>GET request</strong> to 
          <code className="bg-gray-100 px-1 mx-1">/api/kiptext</code> 
          with a <code className="bg-gray-100 px-1">number</code> query parameter.
        </p>
        <pre className="bg-gray-100 p-3 rounded mt-3 text-sm overflow-x-auto">
          <code>GET /api/kiptext?number=9876543210</code><br />
          <code>GET /api/kiptext?number=9999999999</code>
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">📥 ພາຣາມິເຕີ · Parameters</h2>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>
            <strong>number</strong> (required) — 
            ຕົວເລກທີ່ຈະແປ · The number to convert
          </li>
          <li>
            🔺 <strong>ຄ່າສູງສຸດ:</strong> 9,999,999,999 · 
            <strong>Max:</strong> 9,999,999,999
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">📤 ຜົນຮັບກັບ · JSON Response</h2>
        <p className="mt-2 text-sm">
          ຄືນຄ່າ JSON ປະກອບມີ <code>lo</code> (ຄຳອ່ານລາວ), <code>origin</code> (ເລກລາວ), ແລະ <code>oke</code> (karaoke)
        </p>

        <div className="mt-4">
          <h3 className="font-medium mb-2">🔹 Example: 9876543210</h3>
          <pre className="bg-gray-900 text-green-200 p-4 rounded text-sm overflow-x-auto">
{`{
  "number": "9999999999",
  "lo": "ເກົ້າຕື້ເກົ້າຮ້ອຍເກົ້າສິບເກົ້າລ້ານເກົ້າແສນເກົ້າຫມື່ນເກົ້າພັນເກົ້າຮ້ອຍເກົ້າສິບເກົ້າ",
  "origin": "໙໙໙໙໙໙໙໙໙໙",
  "oke": "kao teu kao hoi kao sip kao lan kao saen kao muen kao phan kao hoi kao sip kao"
}`}
          </pre>
        </div>

        <div className="mt-6">
          <h3 className="font-medium mb-2">🔹 Example: 9999999999</h3>
          <pre className="bg-gray-900 text-green-200 p-4 rounded text-sm overflow-x-auto">
{`{
  "number": "9999999999",
  "lo": "ເກົ້າຕື້ເກົ້າຮ້ອຍເກົ້າສິບເກົ້າລ້ານເກົ້າແສນເກົ້າຫມື່ນເກົ້າພັນເກົ້າຮ້ອຍເກົ້າສິບເກົ້າ",
  "origin": "໙໙໙໙໙໙໙໙໙໙",
  "oke": "kao teu kao hoi kao sip kao lan kao saen kao muen kao phan kao hoi kao sip kao"
}`}
          </pre>
        </div>
      </section>

      <footer className="text-xs text-gray-500 mt-12">
        © 2025 IT-NEUNG · Lao Number to Text API
      </footer>
    </main>
  );
}
