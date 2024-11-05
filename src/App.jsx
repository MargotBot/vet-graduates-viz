// src/App.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

function App() {
  const data = [
    { year: '2014', domestic: 2700, international: 1000 },
    { year: '2015', domestic: 2800, international: 1000 },
    { year: '2016', domestic: 2900, international: 1100 },
    { year: '2017', domestic: 2900, international: 1100 },
    { year: '2018', domestic: 3000, international: 1000 },
    { year: '2019', domestic: 3100, international: 1500 },
    { year: '2020', domestic: 3200, international: 1200 },
    { year: '2021', domestic: 3300, international: 1200 },
    { year: '2022', domestic: 3200, international: 1200 },
    { year: '2023', domestic: 3250, international: 1250 }
  ];

  return (
    <div className="w-full bg-white p-4 font-sans">
      <div className="bg-[#8CC63F] text-white p-4 mb-6 rounded-t">
        <h2 className="text-2xl font-bold text-center">U.S. Veterinary Graduate Totals</h2>
      </div>

      <div className="w-full max-w-3xl mx-auto mb-8">
        <div className="text-center text-gray-600">2014-2023 Academic Years</div>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 60, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="year" 
              stroke="#374151"
              tick={{ fill: '#374151' }}
            >
              <Label 
                value="Academic Year" 
                position="bottom" 
                offset={30}
                style={{ fill: '#374151', fontWeight: 500 }}
              />
            </XAxis>
            <YAxis 
              stroke="#374151"
              tick={{ fill: '#374151' }}
              domain={[0, 5000]}
              ticks={[0, 1000, 2000, 3000, 4000, 5000]}
            >
              <Label
                value="Number of Graduates"
                angle={-90}
                position="left"
                offset={40}
                style={{ fill: '#374151', fontWeight: 500 }}
              />
            </YAxis>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              formatter={(value, name) => [
                value.toLocaleString(),
                name === 'domestic' ? 'U.S. Graduates' : 'International Graduates'
              ]}
            />
            <Legend 
              payload={[
                { value: 'U.S. Veterinary College Graduates', type: 'rect', color: '#8CC63F' },
                { value: 'International Graduates', type: 'rect', color: '#69B3E7' }
              ]}
              wrapperStyle={{
                paddingTop: '10px'
              }}
            />
            <Bar dataKey="domestic" stackId="a" fill="#8CC63F" />
            <Bar dataKey="international" stackId="a" fill="#69B3E7" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center mt-6 pb-4 border-t pt-4">
        <p className="text-sm text-gray-600">Prepared by Vet On It LLC</p>
        <p className="text-xs text-gray-500 mt-1">
          This is provided as a free resource and all information should be independently verified.
        </p>
      </div>
    </div>
  );
}

export default App;