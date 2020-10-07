import { create, all } from 'mathjs'

const config = {
  matrix: 'Array'
}

const math = create(all, config)

function createArray(lowerVal, upperVal, numSteps) {
    const stepSize = (upperVal - lowerVal)/numSteps
    var S = math.range(lowerVal, upperVal, stepSize, true)
    S = S.map(x => x.toFixed(2));
    return S
}

function cdfNormal (x, mean, standardDeviation) {
    return (1 - math.erf((mean - x ) / (math.sqrt(2) * standardDeviation))) / 2
}

function ElementWiseBSCall(r, sigma, K, t, T, S)
{
    if (S < 0.0001)
        return 0

    if (T - t < 0.0001)
        return math.max(S - K, 0)

    const sig_root_ttm = sigma*math.sqrt(T - t)
    const d1 = (math.log(S/K) + (r + 0.5*math.pow(sigma, 2))*(T - t))/sig_root_ttm
    const d2 = d1 - sig_root_ttm

    return cdfNormal(d1, 0, 1)*S - cdfNormal(d2, 0, 1)*K*math.exp(-r*(T-t))
}

export function BlackScholesCall(r, sigma, K, t, T, lowerVal, upperVal, numSteps = 20)
{
    const S = createArray(lowerVal, upperVal, numSteps)

    return { S : S, V : S.map(x => ElementWiseBSCall(r, sigma, K, t, T, x)) }
}

export function BlackScholesPut(r, sigma, K, t, T, lowerVal, upperVal, numSteps = 20)
{
    const BSCallOut = BlackScholesCall(r, sigma, K, t, T, lowerVal, upperVal, numSteps)
    const VCall = BSCallOut.V
    const S = BSCallOut.S
    const VPut = math.add(math.subtract(VCall, S), K*math.exp(-r*(T-t)))
    return { S : S, V : VPut }
}

export function BlackScholesStraddle(r, sigma, K, t, T, lowerVal, upperVal, numSteps = 20)
{
    const BSCallOut = BlackScholesCall(r, sigma, K, t, T, lowerVal, upperVal, numSteps)
    const BSPutOut = BlackScholesPut(r, sigma, K, t, T, lowerVal, upperVal, numSteps)
    const S = BSCallOut.S
    const VStraddle = math.add(BSCallOut.V, BSPutOut.V)

    return { S : S, V : VStraddle }
}
